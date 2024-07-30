import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { RecognitionAndRewardsServiceBase } from "./base/recognitionAndRewards.service.base";

@Injectable()
export class RecognitionAndRewardsService extends RecognitionAndRewardsServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
