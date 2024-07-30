import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { RecognitionAndRewardsService } from "./recognitionAndRewards.service";
import { RecognitionAndRewardsControllerBase } from "./base/recognitionAndRewards.controller.base";

@swagger.ApiTags("recognitionAndRewards")
@common.Controller("recognitionAndRewards")
export class RecognitionAndRewardsController extends RecognitionAndRewardsControllerBase {
  constructor(
    protected readonly service: RecognitionAndRewardsService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
