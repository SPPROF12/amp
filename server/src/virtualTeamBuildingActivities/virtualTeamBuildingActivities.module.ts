import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { VirtualTeamBuildingActivitiesModuleBase } from "./base/virtualTeamBuildingActivities.module.base";
import { VirtualTeamBuildingActivitiesService } from "./virtualTeamBuildingActivities.service";
import { VirtualTeamBuildingActivitiesController } from "./virtualTeamBuildingActivities.controller";
import { VirtualTeamBuildingActivitiesResolver } from "./virtualTeamBuildingActivities.resolver";

@Module({
  imports: [
    VirtualTeamBuildingActivitiesModuleBase,
    forwardRef(() => AuthModule),
  ],
  controllers: [VirtualTeamBuildingActivitiesController],
  providers: [
    VirtualTeamBuildingActivitiesService,
    VirtualTeamBuildingActivitiesResolver,
  ],
  exports: [VirtualTeamBuildingActivitiesService],
})
export class VirtualTeamBuildingActivitiesModule {}
