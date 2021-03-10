import { Module } from '@nestjs/common'
import {
  LatestController,
  HottestController,
  FeaturedController,
} from '../controllers'

@Module({
  controllers: [
    LatestController,
    HottestController,
    FeaturedController,
  ],
  providers: [

  ]
})
export class AppModule {}
