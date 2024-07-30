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
import { RecognitionAndRewardsWhereInput } from "./RecognitionAndRewardsWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class RecognitionAndRewardsListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => RecognitionAndRewardsWhereInput,
  })
  @ValidateNested()
  @Type(() => RecognitionAndRewardsWhereInput)
  @IsOptional()
  @Field(() => RecognitionAndRewardsWhereInput, {
    nullable: true,
  })
  every?: RecognitionAndRewardsWhereInput;

  @ApiProperty({
    required: false,
    type: () => RecognitionAndRewardsWhereInput,
  })
  @ValidateNested()
  @Type(() => RecognitionAndRewardsWhereInput)
  @IsOptional()
  @Field(() => RecognitionAndRewardsWhereInput, {
    nullable: true,
  })
  some?: RecognitionAndRewardsWhereInput;

  @ApiProperty({
    required: false,
    type: () => RecognitionAndRewardsWhereInput,
  })
  @ValidateNested()
  @Type(() => RecognitionAndRewardsWhereInput)
  @IsOptional()
  @Field(() => RecognitionAndRewardsWhereInput, {
    nullable: true,
  })
  none?: RecognitionAndRewardsWhereInput;
}
export { RecognitionAndRewardsListRelationFilter as RecognitionAndRewardsListRelationFilter };