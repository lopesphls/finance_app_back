import { Injectable } from '@nestjs/common';
import { randomUUID } from 'node:crypto';
import { User } from 'src/domain/entities/user/user.interface';
import { CreateUser } from '../domain/entities/user/dto/createUser.dto';
import { UserRepository } from './user.repository';

@Injectable()
export class UserService {
	constructor(private readonly userRepository: UserRepository) {}

	public async FindUsersService() {
		try {
			const users: User[] = await this.userRepository.FindUsersRepository();
			return users;
		} catch (error) {
			throw new Error(error);
		}
	}

	public async CreateUserService({
		name,
		email,
		password,
	}: CreateUser): Promise<string> {
		try {
			const user: User = {
				id: randomUUID(),
				name,
				email,
				password,
			};
			await this.userRepository.CreateUserRepository(user);
			return 'ok';
		} catch (error) {
			throw new Error(error);
		}
	}
}
