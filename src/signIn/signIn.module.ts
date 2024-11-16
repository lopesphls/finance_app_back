import { Module } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { SignInController } from './signIn.controller';
import { SignInRepository } from './signIn.repository';
import { SignInService } from './signIn.service';

@Module({
	controllers: [SignInController],
	providers: [SignInRepository, SignInService, PrismaClient],
})
export class SignInModule {}
