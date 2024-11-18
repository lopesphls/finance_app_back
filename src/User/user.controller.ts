import { Controller, Get, Post, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';
import { CreateUser } from 'src/domain/entities/user/dto/createUser.dto';
import { User } from 'src/domain/entities/user/user.interface';
import { HttpResponse } from 'src/protocols/http.protocols';
import { UserService } from './user.service';

@Controller('/')
export class UserController {
	constructor(private readonly userService: UserService) {}

	@Get()
	public async GetAllUsers(@Res() response: Response): Promise<HttpResponse> {
		try {
			const users = await this.userService.FindUsersService();
			return { body: response.json(users), status: 200 };
		} catch (error) {
			throw new Error(error);
		}
	}

	@Get('/user')
	public async GetUser(
		@Req() request: Request,
		@Res() response: Response,
	): Promise<HttpResponse> {
		try {
			const findUser: User = request.body;
			const user = await this.userService.FindUserService(findUser);
			return { body: response.json(user), status: 200 };
		} catch (error) {
			throw new Error(error);
		}
	}

	@Post()
	public async CreateUserController(
		@Req() request: Request,
		@Res() response: Response,
	): Promise<HttpResponse> {
		try {
			const user: CreateUser = request.body;
			await this.userService.CreateUserService(user);
			return { body: response.json('created'), status: 201 };
		} catch (error) {
			throw new error(error);
		}
	}
}
