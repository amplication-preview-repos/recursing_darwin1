import { Appointment } from "../appointment/Appointment";

export type Agent = {
  appointments?: Array<Appointment>;
  assignedWorkshops: string | null;
  createdAt: Date;
  email: string | null;
  id: string;
  name: string | null;
  updatedAt: Date;
};
