import { Injectable } from '@nestjs/common';
import { User } from 'src/entities/user.interface';
import { SignInRepository } from './signIn.repository';

@Injectable()
export class SignInService {
	constructor(private readonly signInRepository: SignInRepository) {}

	public async FindUsersService() {
		try {
			const users: User[] = await this.signInRepository.FindUsersRepository();
			return users;
		} catch (error) {
			throw new Error(error);
		}
	}
}
