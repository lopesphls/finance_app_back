import { Money } from '../money/money.interface';

export interface Expense {
	id: number;
	amount: number;
	description: string;
	date: Date;
	moneyId: Money['id'];
}
