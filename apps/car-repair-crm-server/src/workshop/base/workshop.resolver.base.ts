/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { Workshop } from "./Workshop";
import { WorkshopCountArgs } from "./WorkshopCountArgs";
import { WorkshopFindManyArgs } from "./WorkshopFindManyArgs";
import { WorkshopFindUniqueArgs } from "./WorkshopFindUniqueArgs";
import { CreateWorkshopArgs } from "./CreateWorkshopArgs";
import { UpdateWorkshopArgs } from "./UpdateWorkshopArgs";
import { DeleteWorkshopArgs } from "./DeleteWorkshopArgs";
import { AppointmentFindManyArgs } from "../../appointment/base/AppointmentFindManyArgs";
import { Appointment } from "../../appointment/base/Appointment";
import { WorkshopService } from "../workshop.service";
@graphql.Resolver(() => Workshop)
export class WorkshopResolverBase {
  constructor(protected readonly service: WorkshopService) {}

  async _workshopsMeta(
    @graphql.Args() args: WorkshopCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [Workshop])
  async workshops(
    @graphql.Args() args: WorkshopFindManyArgs
  ): Promise<Workshop[]> {
    return this.service.workshops(args);
  }

  @graphql.Query(() => Workshop, { nullable: true })
  async workshop(
    @graphql.Args() args: WorkshopFindUniqueArgs
  ): Promise<Workshop | null> {
    const result = await this.service.workshop(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Workshop)
  async createWorkshop(
    @graphql.Args() args: CreateWorkshopArgs
  ): Promise<Workshop> {
    return await this.service.createWorkshop({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => Workshop)
  async updateWorkshop(
    @graphql.Args() args: UpdateWorkshopArgs
  ): Promise<Workshop | null> {
    try {
      return await this.service.updateWorkshop({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Workshop)
  async deleteWorkshop(
    @graphql.Args() args: DeleteWorkshopArgs
  ): Promise<Workshop | null> {
    try {
      return await this.service.deleteWorkshop(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.ResolveField(() => [Appointment], { name: "appointments" })
  async findAppointments(
    @graphql.Parent() parent: Workshop,
    @graphql.Args() args: AppointmentFindManyArgs
  ): Promise<Appointment[]> {
    const results = await this.service.findAppointments(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }
}
