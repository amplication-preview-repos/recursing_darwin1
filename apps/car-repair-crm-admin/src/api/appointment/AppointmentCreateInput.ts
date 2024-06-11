import { AgentWhereUniqueInput } from "../agent/AgentWhereUniqueInput";
import { ClientWhereUniqueInput } from "../client/ClientWhereUniqueInput";
import { WorkshopWhereUniqueInput } from "../workshop/WorkshopWhereUniqueInput";

export type AppointmentCreateInput = {
  agent?: AgentWhereUniqueInput | null;
  client?: ClientWhereUniqueInput | null;
  dateAndTime?: Date | null;
  status?: "Option1" | null;
  workshop?: WorkshopWhereUniqueInput | null;
};
