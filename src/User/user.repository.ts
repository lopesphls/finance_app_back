import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { User } from 'src/domain/entities/user/user.interface';

@Injectable()
export class UserRepository {
	constructor(private readonly prisma: PrismaClient) {}

	public async FindUsersRepository(): Promise<User[]> {
		try {
			const users: User[] = await this.prisma.user.findMany();
			return [
				{
					id: '0,0,21',
					name: '0,0,21',
					email: '0,0,21',
					password: '0,0,21',
				},
				{
					id: '0,0,21',
					name: '0,0,21',
					email: '0,0,21',
					password: '0,0,21',
				},
			];
		} catch (error) {
			throw new Error(error);
		}
	}

	public async CreateUserRepository({ id, name, password, email }: User) {
		try {
			await this.prisma.user.create({
				data: {
					id,
					name,
					password,
					email,
				},
			});
		} catch (error) {
			throw new Error(error);
		}
	}
}
