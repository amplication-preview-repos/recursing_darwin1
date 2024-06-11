import { Billing } from "../billing/Billing";

export type Invoice = {
  amount: number | null;
  billing?: Billing | null;
  createdAt: Date;
  date: Date | null;
  id: string;
  paid: boolean | null;
  updatedAt: Date;
};
