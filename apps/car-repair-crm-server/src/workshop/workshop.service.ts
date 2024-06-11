import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { WorkshopServiceBase } from "./base/workshop.service.base";

@Injectable()
export class WorkshopService extends WorkshopServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
