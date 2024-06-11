import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { BillingWhereUniqueInput } from "../billing/BillingWhereUniqueInput";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";

export type InvoiceWhereInput = {
  amount?: FloatNullableFilter;
  billing?: BillingWhereUniqueInput;
  date?: DateTimeNullableFilter;
  id?: StringFilter;
  paid?: BooleanNullableFilter;
};
