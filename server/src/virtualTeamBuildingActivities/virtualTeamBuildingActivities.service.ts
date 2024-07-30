import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { VirtualTeamBuildingActivitiesServiceBase } from "./base/virtualTeamBuildingActivities.service.base";

@Injectable()
export class VirtualTeamBuildingActivitiesService extends VirtualTeamBuildingActivitiesServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
