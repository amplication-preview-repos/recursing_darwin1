import { AppointmentCreateNestedManyWithoutClientsInput } from "./AppointmentCreateNestedManyWithoutClientsInput";
import { BillingCreateNestedManyWithoutClientsInput } from "./BillingCreateNestedManyWithoutClientsInput";

export type ClientCreateInput = {
  appointments?: AppointmentCreateNestedManyWithoutClientsInput;
  billings?: BillingCreateNestedManyWithoutClientsInput;
  email?: string | null;
  name?: string | null;
  phone?: string | null;
};
