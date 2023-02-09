import { Injectable, ForbiddenException } from '@nestjs/common';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { PrismaService } from 'src/prisma/prisma.service';
import { AuthDto } from './dto/auth.dto';
import { Msg, Jwt } from './interfaces/auth.interface';

@Injectable()
export class AuthService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly jwt: JwtService,
    private readonly config: ConfigService,
  ) { }

  async signUp(dto: AuthDto): Promise<Msg> {
    const hashed = await bcrypt.hash(dto.password, 12);
    try {
      const name = dto.name ? dto.name : dto.email
      await this.prisma.user.create({
        data: {
          email: dto.email,
          hashedPassword: hashed,
          name
        },
      });
      return {
        message: 'ok',
      };
    } catch (error) {
      if (error instanceof PrismaClientKnownRequestError) {
        if (error.code === 'P2002') throw new ForbiddenException('This email is already taken');
      }
    }
  }

  async login(dto: Omit<AuthDto, 'name'>): Promise<Jwt> {
    const errorText = 'Email or password incorrect';
    const user = await this.prisma.user.findUnique({
      where: {
        email: dto.email
      }
    });
    if (!user) throw new ForbiddenException(errorText);
    const isValid = await bcrypt.compare(dto.password, user.hashedPassword);
    if (!isValid) throw new ForbiddenException(errorText);
    return this.generateJwt(user.id, user.email)
  }

  async generateJwt(userId: number, email: string): Promise<Jwt> {
    const payload = {
      sub: userId,
      email,
    };
    const secret = this.config.get('JWT_SECRET');
    const token = await this.jwt.signAsync(payload, {
      expiresIn: '5m',
      secret
    })
    return {
      accessToken: token,
    };
  }
}
