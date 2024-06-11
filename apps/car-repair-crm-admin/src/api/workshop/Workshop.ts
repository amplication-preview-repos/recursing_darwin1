import { Appointment } from "../appointment/Appointment";

export type Workshop = {
  address: string | null;
  appointments?: Array<Appointment>;
  createdAt: Date;
  id: string;
  name: string | null;
  phone: string | null;
  updatedAt: Date;
};
