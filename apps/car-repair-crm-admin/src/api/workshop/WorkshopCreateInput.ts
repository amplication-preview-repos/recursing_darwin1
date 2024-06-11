import { AppointmentCreateNestedManyWithoutWorkshopsInput } from "./AppointmentCreateNestedManyWithoutWorkshopsInput";

export type WorkshopCreateInput = {
  address?: string | null;
  appointments?: AppointmentCreateNestedManyWithoutWorkshopsInput;
  name?: string | null;
  phone?: string | null;
};
