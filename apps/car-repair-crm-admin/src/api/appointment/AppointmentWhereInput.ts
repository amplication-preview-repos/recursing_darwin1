import { AgentWhereUniqueInput } from "../agent/AgentWhereUniqueInput";
import { ClientWhereUniqueInput } from "../client/ClientWhereUniqueInput";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { WorkshopWhereUniqueInput } from "../workshop/WorkshopWhereUniqueInput";

export type AppointmentWhereInput = {
  agent?: AgentWhereUniqueInput;
  client?: ClientWhereUniqueInput;
  dateAndTime?: DateTimeNullableFilter;
  id?: StringFilter;
  status?: "Option1";
  workshop?: WorkshopWhereUniqueInput;
};
