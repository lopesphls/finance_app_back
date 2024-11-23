import { Money } from '../../money/money.interface';

export interface CreateExpense {
	amount: number;
	description: string;
	date: Date;
	moneyId: Money['id'];
}
