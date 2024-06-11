import { AppointmentUpdateManyWithoutWorkshopsInput } from "./AppointmentUpdateManyWithoutWorkshopsInput";

export type WorkshopUpdateInput = {
  address?: string | null;
  appointments?: AppointmentUpdateManyWithoutWorkshopsInput;
  name?: string | null;
  phone?: string | null;
};
