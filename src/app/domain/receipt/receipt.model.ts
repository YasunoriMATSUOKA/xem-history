import { Invoice } from '../invoice/invoice.model';

export type Receipt = Invoice & {
  tickerAmount: Number;
  exchangeId: String;
  exchangeRate: Number;
  txHash?: String;
  createdAt: Date;
  updatedAt: Date;
  unconfirmedAt?: Date;
  confirmedAt?: Date;
  lockedAt?: Date;
};
