import { SortOrder } from "../../util/SortOrder";

export type BillingOrderByInput = {
  amount?: SortOrder;
  clientId?: SortOrder;
  createdAt?: SortOrder;
  date?: SortOrder;
  id?: SortOrder;
  updatedAt?: SortOrder;
};
