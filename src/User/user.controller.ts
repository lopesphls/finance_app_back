import { Controller, Get, Res } from '@nestjs/common';
import { Response } from 'express';
import { User } from 'src/domain/entities/user/user.interface';
import { HttpResponse } from 'src/protocols/http.protocols';
import { UserService } from './user.service';

@Controller('/')
export class UserController {
	constructor(private readonly userService: UserService) {}

	@Get()
	public async GetAllUsers(@Res() response: Response): Promise<HttpResponse> {
		try {
			const users: User[] = await this.userService.FindUsersService();
			return {
				body: response.json(users),
				status: 200,
			};
		} catch (error) {
			throw new Error(error);
		}
	}
}
