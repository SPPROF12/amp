/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";

import {
  Prisma,
  VirtualTeamBuildingActivities as PrismaVirtualTeamBuildingActivities,
  RecognitionAndRewards as PrismaRecognitionAndRewards,
} from "@prisma/client";

export class VirtualTeamBuildingActivitiesServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.VirtualTeamBuildingActivitiesCountArgs, "select">
  ): Promise<number> {
    return this.prisma.virtualTeamBuildingActivities.count(args);
  }

  async virtualTeamBuildingActivitiesItems(
    args: Prisma.VirtualTeamBuildingActivitiesFindManyArgs
  ): Promise<PrismaVirtualTeamBuildingActivities[]> {
    return this.prisma.virtualTeamBuildingActivities.findMany(args);
  }
  async virtualTeamBuildingActivities(
    args: Prisma.VirtualTeamBuildingActivitiesFindUniqueArgs
  ): Promise<PrismaVirtualTeamBuildingActivities | null> {
    return this.prisma.virtualTeamBuildingActivities.findUnique(args);
  }
  async createVirtualTeamBuildingActivities(
    args: Prisma.VirtualTeamBuildingActivitiesCreateArgs
  ): Promise<PrismaVirtualTeamBuildingActivities> {
    return this.prisma.virtualTeamBuildingActivities.create(args);
  }
  async updateVirtualTeamBuildingActivities(
    args: Prisma.VirtualTeamBuildingActivitiesUpdateArgs
  ): Promise<PrismaVirtualTeamBuildingActivities> {
    return this.prisma.virtualTeamBuildingActivities.update(args);
  }
  async deleteVirtualTeamBuildingActivities(
    args: Prisma.VirtualTeamBuildingActivitiesDeleteArgs
  ): Promise<PrismaVirtualTeamBuildingActivities> {
    return this.prisma.virtualTeamBuildingActivities.delete(args);
  }

  async getRewards(
    parentId: string
  ): Promise<PrismaRecognitionAndRewards | null> {
    return this.prisma.virtualTeamBuildingActivities
      .findUnique({
        where: { id: parentId },
      })
      .rewards();
  }
}
