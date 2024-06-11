import { Client } from "../client/Client";
import { Invoice } from "../invoice/Invoice";

export type Billing = {
  amount: number | null;
  client?: Client | null;
  createdAt: Date;
  date: Date | null;
  id: string;
  invoices?: Array<Invoice>;
  updatedAt: Date;
};
