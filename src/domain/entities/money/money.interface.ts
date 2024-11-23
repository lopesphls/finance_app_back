import { Expense } from '../expense/expense.interface';
import { Income } from '../income/income.interface';
import { User } from '../user/user.interface';

export interface Money {
	id: number;
	balance: number;
	userId: User['id'];
	expense?: Expense[];
	income?: Income[];
}
