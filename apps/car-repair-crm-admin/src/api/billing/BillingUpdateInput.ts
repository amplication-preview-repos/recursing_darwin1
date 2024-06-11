import { ClientWhereUniqueInput } from "../client/ClientWhereUniqueInput";
import { InvoiceUpdateManyWithoutBillingsInput } from "./InvoiceUpdateManyWithoutBillingsInput";

export type BillingUpdateInput = {
  amount?: number | null;
  client?: ClientWhereUniqueInput | null;
  date?: Date | null;
  invoices?: InvoiceUpdateManyWithoutBillingsInput;
};
