import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { User } from 'src/domain/entities/user/user.interface';

@Injectable()
export class UserRepository {
	constructor(private readonly prisma: PrismaClient) {}

	public async FindUsersRepository(): Promise<User[]> {
		try {
			const users: User[] = await this.prisma.user.findMany();
			return users;
		} catch (error) {
			throw new Error(error);
		}
	}

	public async FindUserByEmailRepository(email: string): Promise<User> {
		try {
			const user: User = await this.prisma.user.findUnique({
				where: { email },
			});
			return user;
		} catch (error) {
			throw new Error(error);
		}
	}

	public async FindUserByIdRepository(id: string): Promise<User> {
		try {
			const user: User = await this.prisma.user.findUnique({
				where: { id },
			});
			return user;
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

	public async UpdateUserRepository({ id, name, email, password }: User) {
		try {
			return await this.prisma.user.update({
				where: { id },
				data: {
					name,
					email,
					password,
				},
			});
		} catch (error) {
			throw new Error(error);
		}
	}

	public async DeleteUserRepository(id: string) {
		try {
			await this.prisma.user.delete({ where: { id } });
		} catch (error) {
			throw new Error(error);
		}
	}
}
