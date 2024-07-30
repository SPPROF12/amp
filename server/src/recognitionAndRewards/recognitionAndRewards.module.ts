import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { RecognitionAndRewardsModuleBase } from "./base/recognitionAndRewards.module.base";
import { RecognitionAndRewardsService } from "./recognitionAndRewards.service";
import { RecognitionAndRewardsController } from "./recognitionAndRewards.controller";
import { RecognitionAndRewardsResolver } from "./recognitionAndRewards.resolver";

@Module({
  imports: [RecognitionAndRewardsModuleBase, forwardRef(() => AuthModule)],
  controllers: [RecognitionAndRewardsController],
  providers: [RecognitionAndRewardsService, RecognitionAndRewardsResolver],
  exports: [RecognitionAndRewardsService],
})
export class RecognitionAndRewardsModule {}
