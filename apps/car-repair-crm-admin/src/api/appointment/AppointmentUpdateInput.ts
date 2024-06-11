import { AgentWhereUniqueInput } from "../agent/AgentWhereUniqueInput";
import { ClientWhereUniqueInput } from "../client/ClientWhereUniqueInput";
import { WorkshopWhereUniqueInput } from "../workshop/WorkshopWhereUniqueInput";

export type AppointmentUpdateInput = {
  agent?: AgentWhereUniqueInput | null;
  client?: ClientWhereUniqueInput | null;
  dateAndTime?: Date | null;
  status?: "Option1" | null;
  workshop?: WorkshopWhereUniqueInput | null;
};
