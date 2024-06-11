import { Workshop as TWorkshop } from "../api/workshop/Workshop";

export const WORKSHOP_TITLE_FIELD = "name";

export const WorkshopTitle = (record: TWorkshop): string => {
  return record.name?.toString() || String(record.id);
};
