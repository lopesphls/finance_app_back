import { Money } from '../money/money.interface';

export interface Income {
	id: number;
	amount: number;
	description: string;
	date: Date;
	moneyId: Money['id'];
}
