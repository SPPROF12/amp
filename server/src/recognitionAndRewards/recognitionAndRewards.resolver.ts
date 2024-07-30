import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { RecognitionAndRewardsResolverBase } from "./base/recognitionAndRewards.resolver.base";
import { RecognitionAndRewards } from "./base/RecognitionAndRewards";
import { RecognitionAndRewardsService } from "./recognitionAndRewards.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => RecognitionAndRewards)
export class RecognitionAndRewardsResolver extends RecognitionAndRewardsResolverBase {
  constructor(
    protected readonly service: RecognitionAndRewardsService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
