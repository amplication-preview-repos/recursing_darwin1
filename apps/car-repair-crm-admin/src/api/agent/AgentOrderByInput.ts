import { SortOrder } from "../../util/SortOrder";

export type AgentOrderByInput = {
  assignedWorkshops?: SortOrder;
  createdAt?: SortOrder;
  email?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  updatedAt?: SortOrder;
};
