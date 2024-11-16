import { Module } from '@nestjs/common';
import { SignInModule } from './signIn/signIn.module';

@Module({
  imports: [SignInModule],
  controllers: [],
  providers: [],
})

export class AppModule {}
