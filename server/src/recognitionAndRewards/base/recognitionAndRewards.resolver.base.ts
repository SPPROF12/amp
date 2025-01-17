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
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { RecognitionAndRewards } from "./RecognitionAndRewards";
import { RecognitionAndRewardsCountArgs } from "./RecognitionAndRewardsCountArgs";
import { RecognitionAndRewardsFindManyArgs } from "./RecognitionAndRewardsFindManyArgs";
import { RecognitionAndRewardsFindUniqueArgs } from "./RecognitionAndRewardsFindUniqueArgs";
import { CreateRecognitionAndRewardsArgs } from "./CreateRecognitionAndRewardsArgs";
import { UpdateRecognitionAndRewardsArgs } from "./UpdateRecognitionAndRewardsArgs";
import { DeleteRecognitionAndRewardsArgs } from "./DeleteRecognitionAndRewardsArgs";
import { User } from "../../user/base/User";
import { VirtualTeamBuildingActivities } from "../../virtualTeamBuildingActivities/base/VirtualTeamBuildingActivities";
import { RecognitionAndRewardsService } from "../recognitionAndRewards.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => RecognitionAndRewards)
export class RecognitionAndRewardsResolverBase {
  constructor(
    protected readonly service: RecognitionAndRewardsService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "RecognitionAndRewards",
    action: "read",
    possession: "any",
  })
  async _recognitionAndRewardsItemsMeta(
    @graphql.Args() args: RecognitionAndRewardsCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [RecognitionAndRewards])
  @nestAccessControl.UseRoles({
    resource: "RecognitionAndRewards",
    action: "read",
    possession: "any",
  })
  async recognitionAndRewardsItems(
    @graphql.Args() args: RecognitionAndRewardsFindManyArgs
  ): Promise<RecognitionAndRewards[]> {
    return this.service.recognitionAndRewardsItems(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => RecognitionAndRewards, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "RecognitionAndRewards",
    action: "read",
    possession: "own",
  })
  async recognitionAndRewards(
    @graphql.Args() args: RecognitionAndRewardsFindUniqueArgs
  ): Promise<RecognitionAndRewards | null> {
    const result = await this.service.recognitionAndRewards(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => RecognitionAndRewards)
  @nestAccessControl.UseRoles({
    resource: "RecognitionAndRewards",
    action: "create",
    possession: "any",
  })
  async createRecognitionAndRewards(
    @graphql.Args() args: CreateRecognitionAndRewardsArgs
  ): Promise<RecognitionAndRewards> {
    return await this.service.createRecognitionAndRewards({
      ...args,
      data: {
        ...args.data,

        user: args.data.user
          ? {
              connect: args.data.user,
            }
          : undefined,

        virtualTeamBuildingActivitiesItems: args.data
          .virtualTeamBuildingActivitiesItems
          ? {
              connect: args.data.virtualTeamBuildingActivitiesItems,
            }
          : undefined,
      },
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => RecognitionAndRewards)
  @nestAccessControl.UseRoles({
    resource: "RecognitionAndRewards",
    action: "update",
    possession: "any",
  })
  async updateRecognitionAndRewards(
    @graphql.Args() args: UpdateRecognitionAndRewardsArgs
  ): Promise<RecognitionAndRewards | null> {
    try {
      return await this.service.updateRecognitionAndRewards({
        ...args,
        data: {
          ...args.data,

          user: args.data.user
            ? {
                connect: args.data.user,
              }
            : undefined,

          virtualTeamBuildingActivitiesItems: args.data
            .virtualTeamBuildingActivitiesItems
            ? {
                connect: args.data.virtualTeamBuildingActivitiesItems,
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

  @graphql.Mutation(() => RecognitionAndRewards)
  @nestAccessControl.UseRoles({
    resource: "RecognitionAndRewards",
    action: "delete",
    possession: "any",
  })
  async deleteRecognitionAndRewards(
    @graphql.Args() args: DeleteRecognitionAndRewardsArgs
  ): Promise<RecognitionAndRewards | null> {
    try {
      return await this.service.deleteRecognitionAndRewards(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => User, {
    nullable: true,
    name: "user",
  })
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "read",
    possession: "any",
  })
  async getUser(
    @graphql.Parent() parent: RecognitionAndRewards
  ): Promise<User | null> {
    const result = await this.service.getUser(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => VirtualTeamBuildingActivities, {
    nullable: true,
    name: "virtualTeamBuildingActivitiesItems",
  })
  @nestAccessControl.UseRoles({
    resource: "VirtualTeamBuildingActivities",
    action: "read",
    possession: "any",
  })
  async getVirtualTeamBuildingActivitiesItems(
    @graphql.Parent() parent: RecognitionAndRewards
  ): Promise<VirtualTeamBuildingActivities | null> {
    const result = await this.service.getVirtualTeamBuildingActivitiesItems(
      parent.id
    );

    if (!result) {
      return null;
    }
    return result;
  }
}
