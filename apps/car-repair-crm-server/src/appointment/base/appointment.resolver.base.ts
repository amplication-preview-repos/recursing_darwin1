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
import { Appointment } from "./Appointment";
import { AppointmentCountArgs } from "./AppointmentCountArgs";
import { AppointmentFindManyArgs } from "./AppointmentFindManyArgs";
import { AppointmentFindUniqueArgs } from "./AppointmentFindUniqueArgs";
import { CreateAppointmentArgs } from "./CreateAppointmentArgs";
import { UpdateAppointmentArgs } from "./UpdateAppointmentArgs";
import { DeleteAppointmentArgs } from "./DeleteAppointmentArgs";
import { Agent } from "../../agent/base/Agent";
import { Client } from "../../client/base/Client";
import { Workshop } from "../../workshop/base/Workshop";
import { AppointmentService } from "../appointment.service";
@graphql.Resolver(() => Appointment)
export class AppointmentResolverBase {
  constructor(protected readonly service: AppointmentService) {}

  async _appointmentsMeta(
    @graphql.Args() args: AppointmentCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [Appointment])
  async appointments(
    @graphql.Args() args: AppointmentFindManyArgs
  ): Promise<Appointment[]> {
    return this.service.appointments(args);
  }

  @graphql.Query(() => Appointment, { nullable: true })
  async appointment(
    @graphql.Args() args: AppointmentFindUniqueArgs
  ): Promise<Appointment | null> {
    const result = await this.service.appointment(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Appointment)
  async createAppointment(
    @graphql.Args() args: CreateAppointmentArgs
  ): Promise<Appointment> {
    return await this.service.createAppointment({
      ...args,
      data: {
        ...args.data,

        agent: args.data.agent
          ? {
              connect: args.data.agent,
            }
          : undefined,

        client: args.data.client
          ? {
              connect: args.data.client,
            }
          : undefined,

        workshop: args.data.workshop
          ? {
              connect: args.data.workshop,
            }
          : undefined,
      },
    });
  }

  @graphql.Mutation(() => Appointment)
  async updateAppointment(
    @graphql.Args() args: UpdateAppointmentArgs
  ): Promise<Appointment | null> {
    try {
      return await this.service.updateAppointment({
        ...args,
        data: {
          ...args.data,

          agent: args.data.agent
            ? {
                connect: args.data.agent,
              }
            : undefined,

          client: args.data.client
            ? {
                connect: args.data.client,
              }
            : undefined,

          workshop: args.data.workshop
            ? {
                connect: args.data.workshop,
              }
            : undefined,
        },
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

  @graphql.Mutation(() => Appointment)
  async deleteAppointment(
    @graphql.Args() args: DeleteAppointmentArgs
  ): Promise<Appointment | null> {
    try {
      return await this.service.deleteAppointment(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.ResolveField(() => Agent, {
    nullable: true,
    name: "agent",
  })
  async getAgent(@graphql.Parent() parent: Appointment): Promise<Agent | null> {
    const result = await this.service.getAgent(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }

  @graphql.ResolveField(() => Client, {
    nullable: true,
    name: "client",
  })
  async getClient(
    @graphql.Parent() parent: Appointment
  ): Promise<Client | null> {
    const result = await this.service.getClient(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }

  @graphql.ResolveField(() => Workshop, {
    nullable: true,
    name: "workshop",
  })
  async getWorkshop(
    @graphql.Parent() parent: Appointment
  ): Promise<Workshop | null> {
    const result = await this.service.getWorkshop(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
