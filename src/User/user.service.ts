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

	public async FindUserByEmailService(email: string) {
		try {
			if (email ?? false) {
				console.log(email);
				const users: User =
					await this.userRepository.FindUserByEmailRepository(email);
				return users;
			}
		} catch (error) {
			throw new Error(error);
		}
	}

	public async FindUserByIdService(id: string) {
		try {
			if (id ?? false) {
				const users: User =
					await this.userRepository.FindUserByIdRepository(id);
				return users;
			}
		} catch (error) {
			throw new Error(error);
		}
	}

	public async CreateUserService({ name, email, password }: CreateUser) {
		try {
			const user: User = {
				id: randomUUID(),
				name,
				email,
				password,
			};
			await this.userRepository.CreateUserRepository(user);
		} catch (error) {
			throw new Error(error);
		}
	}

	public async UpdateUserService({ id, name, email, password }: User) {
		try {
			const findById = await this.FindUserByIdService(id);
			if (!findById) {
				throw new Error('Usuário não encontrado');
			}
			const user = {
				id,
				email,
				name,
				password,
			};
			await this.userRepository.UpdateUserRepository(user);
			return 'ok';
		} catch (error) {
			throw new Error(error);
		}
	}

	public async DeleteUserService(id: string) {
		try {
			const user = await this.FindUserByIdService(id);
			if (!user) {
				throw new Error('Usuário não encontrado');
			}
			await this.userRepository.DeleteUserRepository(user.id);
		} catch (error) {
			throw new Error(error);
		}
	}
}
