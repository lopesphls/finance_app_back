import { Money } from '../../money/money.interface';

export interface CreateIncome {
	amount: number;
	description: string;
	date: Date;
	moneyId: Money['id'];
}
