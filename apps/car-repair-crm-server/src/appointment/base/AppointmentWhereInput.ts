/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { AgentWhereUniqueInput } from "../../agent/base/AgentWhereUniqueInput";
import { ValidateNested, IsOptional, IsEnum } from "class-validator";
import { Type } from "class-transformer";
import { ClientWhereUniqueInput } from "../../client/base/ClientWhereUniqueInput";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { EnumAppointmentStatus } from "./EnumAppointmentStatus";
import { WorkshopWhereUniqueInput } from "../../workshop/base/WorkshopWhereUniqueInput";

@InputType()
class AppointmentWhereInput {
  @ApiProperty({
    required: false,
    type: () => AgentWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => AgentWhereUniqueInput)
  @IsOptional()
  @Field(() => AgentWhereUniqueInput, {
    nullable: true,
  })
  agent?: AgentWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: () => ClientWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => ClientWhereUniqueInput)
  @IsOptional()
  @Field(() => ClientWhereUniqueInput, {
    nullable: true,
  })
  client?: ClientWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: DateTimeNullableFilter,
  })
  @Type(() => DateTimeNullableFilter)
  @IsOptional()
  @Field(() => DateTimeNullableFilter, {
    nullable: true,
  })
  dateAndTime?: DateTimeNullableFilter;

  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  id?: StringFilter;

  @ApiProperty({
    required: false,
    enum: EnumAppointmentStatus,
  })
  @IsEnum(EnumAppointmentStatus)
  @IsOptional()
  @Field(() => EnumAppointmentStatus, {
    nullable: true,
  })
  status?: "Option1";

  @ApiProperty({
    required: false,
    type: () => WorkshopWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => WorkshopWhereUniqueInput)
  @IsOptional()
  @Field(() => WorkshopWhereUniqueInput, {
    nullable: true,
  })
  workshop?: WorkshopWhereUniqueInput;
}

export { AppointmentWhereInput as AppointmentWhereInput };
