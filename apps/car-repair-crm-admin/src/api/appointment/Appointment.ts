import { Agent } from "../agent/Agent";
import { Client } from "../client/Client";
import { Workshop } from "../workshop/Workshop";

export type Appointment = {
  agent?: Agent | null;
  client?: Client | null;
  createdAt: Date;
  dateAndTime: Date | null;
  id: string;
  status?: "Option1" | null;
  updatedAt: Date;
  workshop?: Workshop | null;
};
