import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { VirtualTeamBuildingActivitiesService } from "./virtualTeamBuildingActivities.service";
import { VirtualTeamBuildingActivitiesControllerBase } from "./base/virtualTeamBuildingActivities.controller.base";

@swagger.ApiTags("virtualTeamBuildingActivities")
@common.Controller("virtualTeamBuildingActivities")
export class VirtualTeamBuildingActivitiesController extends VirtualTeamBuildingActivitiesControllerBase {
  constructor(
    protected readonly service: VirtualTeamBuildingActivitiesService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
