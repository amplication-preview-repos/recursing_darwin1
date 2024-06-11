import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { WorkshopService } from "./workshop.service";
import { WorkshopControllerBase } from "./base/workshop.controller.base";

@swagger.ApiTags("workshops")
@common.Controller("workshops")
export class WorkshopController extends WorkshopControllerBase {
  constructor(protected readonly service: WorkshopService) {
    super(service);
  }
}
