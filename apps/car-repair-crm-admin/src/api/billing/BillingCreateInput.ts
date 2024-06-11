import { ClientWhereUniqueInput } from "../client/ClientWhereUniqueInput";
import { InvoiceCreateNestedManyWithoutBillingsInput } from "./InvoiceCreateNestedManyWithoutBillingsInput";

export type BillingCreateInput = {
  amount?: number | null;
  client?: ClientWhereUniqueInput | null;
  date?: Date | null;
  invoices?: InvoiceCreateNestedManyWithoutBillingsInput;
};
