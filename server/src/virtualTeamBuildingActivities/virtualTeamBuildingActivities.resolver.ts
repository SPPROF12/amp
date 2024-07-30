import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { VirtualTeamBuildingActivitiesResolverBase } from "./base/virtualTeamBuildingActivities.resolver.base";
import { VirtualTeamBuildingActivities } from "./base/VirtualTeamBuildingActivities";
import { VirtualTeamBuildingActivitiesService } from "./virtualTeamBuildingActivities.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => VirtualTeamBuildingActivities)
export class VirtualTeamBuildingActivitiesResolver extends VirtualTeamBuildingActivitiesResolverBase {
  constructor(
    protected readonly service: VirtualTeamBuildingActivitiesService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
