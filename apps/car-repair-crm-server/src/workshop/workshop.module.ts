import { Module } from "@nestjs/common";
import { WorkshopModuleBase } from "./base/workshop.module.base";
import { WorkshopService } from "./workshop.service";
import { WorkshopController } from "./workshop.controller";
import { WorkshopResolver } from "./workshop.resolver";

@Module({
  imports: [WorkshopModuleBase],
  controllers: [WorkshopController],
  providers: [WorkshopService, WorkshopResolver],
  exports: [WorkshopService],
})
export class WorkshopModule {}
