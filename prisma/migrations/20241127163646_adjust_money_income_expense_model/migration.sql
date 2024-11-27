-- AlterTable
CREATE SEQUENCE expense_id_seq;
ALTER TABLE "Expense" ALTER COLUMN "id" SET DEFAULT nextval('expense_id_seq');
ALTER SEQUENCE expense_id_seq OWNED BY "Expense"."id";

-- AlterTable
CREATE SEQUENCE income_id_seq;
ALTER TABLE "Income" ALTER COLUMN "id" SET DEFAULT nextval('income_id_seq');
ALTER SEQUENCE income_id_seq OWNED BY "Income"."id";

-- AlterTable
CREATE SEQUENCE money_id_seq;
ALTER TABLE "Money" ALTER COLUMN "id" SET DEFAULT nextval('money_id_seq');
ALTER SEQUENCE money_id_seq OWNED BY "Money"."id";
