import {
	Body,
	Controller,
	Delete,
	Get,
	Param,
	Post,
	Put,
	Res,
} from '@nestjs/common';
import { Response } from 'express';
import { CreateUser } from 'src/domain/entities/user/dto/createUser.dto';
import { User } from 'src/domain/entities/user/user.interface';
import { HttpResponse } from 'src/protocols/http.protocols';
import { UserService } from './user.service';

@Controller('/u')
export class UserController {
	constructor(private readonly userService: UserService) {}

	@Get('/')
	public async GetAllUsers(@Res() response: Response): Promise<HttpResponse> {
		try {
			const users = await this.userService.FindUsersService();
			return { body: response.json(users), status: 200 };
		} catch (error) {
			throw new Error(error);
		}
	}

	@Get('/:id')
	public async GetUserById(
		@Param() { id }: User,
		@Res() response: Response,
	): Promise<HttpResponse> {
		try {
			const user = await this.userService.FindUserByIdService(id);
			return { body: response.json(user), status: 200 };
		} catch (error) {
			throw new Error(error);
		}
	}

	@Get('/email/:email')
	public async GetUserByEmail(
		@Param() { email }: User,
		@Res() response: Response,
	): Promise<HttpResponse> {
		try {
			const user = await this.userService.FindUserByEmailService(email);
			return { body: response.json(user), status: 200 };
		} catch (error) {
			throw new Error(error);
		}
	}

	@Post()
	public async CreateUserController(
		@Body() { email, name, password }: CreateUser,
		@Res() response: Response,
	): Promise<HttpResponse> {
		try {
			await this.userService.CreateUserService({ email, name, password });
			return { body: response.json('created'), status: 201 };
		} catch (error) {
			throw new error(error);
		}
	}

	@Put('/:id')
	public async UpdateUserController(
		@Param() { id }: User,
		@Body() { email, name, password }: User,
		@Res() response: Response,
	): Promise<HttpResponse> {
		try {
			await this.userService.UpdateUserService({ id, email, name, password });
			return { body: response.json('ok'), status: 200 };
		} catch (error) {
			throw new error(error);
		}
	}

	@Delete('/:id')
	public async DeleteUserController(
		@Param() { id }: User,
		@Res() response: Response,
	): Promise<HttpResponse> {
		try {
			await this.userService.DeleteUserService(id);
			return {
				body: response.json('Usuário deletado com sucesso'),
				status: 200,
			};
		} catch (error) {
			throw new error(error);
		}
	}
}
