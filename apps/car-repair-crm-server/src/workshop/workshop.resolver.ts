import * as graphql from "@nestjs/graphql";
import { WorkshopResolverBase } from "./base/workshop.resolver.base";
import { Workshop } from "./base/Workshop";
import { WorkshopService } from "./workshop.service";

@graphql.Resolver(() => Workshop)
export class WorkshopResolver extends WorkshopResolverBase {
  constructor(protected readonly service: WorkshopService) {
    super(service);
  }
}
