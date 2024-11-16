import { Controller, Get, Res } from '@nestjs/common';
import { Response } from 'express';
import { SignInService } from './signIn.service';

@Controller('/')
export class SignInController {
	constructor(private readonly signInService: SignInService) {}

	@Get()
	public async SignInGet(@Res() response: Response) {
		const users = await this.signInService.FindUsersService();
		return response.json(users).status(200);
	}
}
