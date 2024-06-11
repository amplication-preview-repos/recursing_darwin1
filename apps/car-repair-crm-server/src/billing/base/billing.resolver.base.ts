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
import { Billing } from "./Billing";
import { BillingCountArgs } from "./BillingCountArgs";
import { BillingFindManyArgs } from "./BillingFindManyArgs";
import { BillingFindUniqueArgs } from "./BillingFindUniqueArgs";
import { CreateBillingArgs } from "./CreateBillingArgs";
import { UpdateBillingArgs } from "./UpdateBillingArgs";
import { DeleteBillingArgs } from "./DeleteBillingArgs";
import { InvoiceFindManyArgs } from "../../invoice/base/InvoiceFindManyArgs";
import { Invoice } from "../../invoice/base/Invoice";
import { Client } from "../../client/base/Client";
import { BillingService } from "../billing.service";
@graphql.Resolver(() => Billing)
export class BillingResolverBase {
  constructor(protected readonly service: BillingService) {}

  async _billingsMeta(
    @graphql.Args() args: BillingCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [Billing])
  async billings(
    @graphql.Args() args: BillingFindManyArgs
  ): Promise<Billing[]> {
    return this.service.billings(args);
  }

  @graphql.Query(() => Billing, { nullable: true })
  async billing(
    @graphql.Args() args: BillingFindUniqueArgs
  ): Promise<Billing | null> {
    const result = await this.service.billing(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Billing)
  async createBilling(
    @graphql.Args() args: CreateBillingArgs
  ): Promise<Billing> {
    return await this.service.createBilling({
      ...args,
      data: {
        ...args.data,

        client: args.data.client
          ? {
              connect: args.data.client,
            }
          : undefined,
      },
    });
  }

  @graphql.Mutation(() => Billing)
  async updateBilling(
    @graphql.Args() args: UpdateBillingArgs
  ): Promise<Billing | null> {
    try {
      return await this.service.updateBilling({
        ...args,
        data: {
          ...args.data,

          client: args.data.client
            ? {
                connect: args.data.client,
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

  @graphql.Mutation(() => Billing)
  async deleteBilling(
    @graphql.Args() args: DeleteBillingArgs
  ): Promise<Billing | null> {
    try {
      return await this.service.deleteBilling(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.ResolveField(() => [Invoice], { name: "invoices" })
  async findInvoices(
    @graphql.Parent() parent: Billing,
    @graphql.Args() args: InvoiceFindManyArgs
  ): Promise<Invoice[]> {
    const results = await this.service.findInvoices(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @graphql.ResolveField(() => Client, {
    nullable: true,
    name: "client",
  })
  async getClient(@graphql.Parent() parent: Billing): Promise<Client | null> {
    const result = await this.service.getClient(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}