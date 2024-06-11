import { Appointment } from "../appointment/Appointment";
import { Billing } from "../billing/Billing";

export type Client = {
  appointments?: Array<Appointment>;
  billings?: Array<Billing>;
  createdAt: Date;
  email: string | null;
  id: string;
  name: string | null;
  phone: string | null;
  updatedAt: Date;
};
