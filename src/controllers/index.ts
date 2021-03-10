import {
  Get,
  Param,
  Controller
} from '@nestjs/common'
import {
  ForumsRequest
} from '../requests/forums'
// import {
//   Forums,
// } from '../interfaces'

@Controller()
export class LatestController {

  private readonly request: ForumsRequest = new ForumsRequest()

  @Get('/:type/:limit')
  async fetchLatest (@Param('type') type: string, @Param('limit') limit: number): Promise<string> {
    this.request.getPosts({
      pageLimit: limit < 0 ? 5 : limit,
      isHot: type.toLowerCase() === 'hot',
      isGood: type.toLowerCase() === 'good',
    })

    return 'Hello, World'
  }
}

@Controller()
export class HottestController {}

@Controller()
export class FeaturedController {}
