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
import { VirtualTeamBuildingActivitiesWhereInput } from "./VirtualTeamBuildingActivitiesWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class VirtualTeamBuildingActivitiesListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => VirtualTeamBuildingActivitiesWhereInput,
  })
  @ValidateNested()
  @Type(() => VirtualTeamBuildingActivitiesWhereInput)
  @IsOptional()
  @Field(() => VirtualTeamBuildingActivitiesWhereInput, {
    nullable: true,
  })
  every?: VirtualTeamBuildingActivitiesWhereInput;

  @ApiProperty({
    required: false,
    type: () => VirtualTeamBuildingActivitiesWhereInput,
  })
  @ValidateNested()
  @Type(() => VirtualTeamBuildingActivitiesWhereInput)
  @IsOptional()
  @Field(() => VirtualTeamBuildingActivitiesWhereInput, {
    nullable: true,
  })
  some?: VirtualTeamBuildingActivitiesWhereInput;

  @ApiProperty({
    required: false,
    type: () => VirtualTeamBuildingActivitiesWhereInput,
  })
  @ValidateNested()
  @Type(() => VirtualTeamBuildingActivitiesWhereInput)
  @IsOptional()
  @Field(() => VirtualTeamBuildingActivitiesWhereInput, {
    nullable: true,
  })
  none?: VirtualTeamBuildingActivitiesWhereInput;
}
export { VirtualTeamBuildingActivitiesListRelationFilter as VirtualTeamBuildingActivitiesListRelationFilter };