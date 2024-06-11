import { WorkshopWhereInput } from "./WorkshopWhereInput";
import { WorkshopOrderByInput } from "./WorkshopOrderByInput";

export type WorkshopFindManyArgs = {
  where?: WorkshopWhereInput;
  orderBy?: Array<WorkshopOrderByInput>;
  skip?: number;
  take?: number;
};
