import { BillingWhereUniqueInput } from "../billing/BillingWhereUniqueInput";

export type InvoiceCreateInput = {
  amount?: number | null;
  billing?: BillingWhereUniqueInput | null;
  date?: Date | null;
  paid?: boolean | null;
};
