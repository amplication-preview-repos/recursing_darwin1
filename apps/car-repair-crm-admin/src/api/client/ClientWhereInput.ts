import { AppointmentListRelationFilter } from "../appointment/AppointmentListRelationFilter";
import { BillingListRelationFilter } from "../billing/BillingListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type ClientWhereInput = {
  appointments?: AppointmentListRelationFilter;
  billings?: BillingListRelationFilter;
  email?: StringNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  phone?: StringNullableFilter;
};
