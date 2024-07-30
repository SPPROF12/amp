/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { VirtualTeamBuildingActivitiesWhereUniqueInput } from "./VirtualTeamBuildingActivitiesWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { VirtualTeamBuildingActivitiesUpdateInput } from "./VirtualTeamBuildingActivitiesUpdateInput";

@ArgsType()
class UpdateVirtualTeamBuildingActivitiesArgs {
  @ApiProperty({
    required: true,
    type: () => VirtualTeamBuildingActivitiesWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => VirtualTeamBuildingActivitiesWhereUniqueInput)
  @Field(() => VirtualTeamBuildingActivitiesWhereUniqueInput, {
    nullable: false,
  })
  where!: VirtualTeamBuildingActivitiesWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => VirtualTeamBuildingActivitiesUpdateInput,
  })
  @ValidateNested()
  @Type(() => VirtualTeamBuildingActivitiesUpdateInput)
  @Field(() => VirtualTeamBuildingActivitiesUpdateInput, { nullable: false })
  data!: VirtualTeamBuildingActivitiesUpdateInput;
}

export { UpdateVirtualTeamBuildingActivitiesArgs as UpdateVirtualTeamBuildingActivitiesArgs };
