import {
  HttpsClient,
  HttpsRequestInterceptor,
} from '@hqoss/http-client'

import {
  Forums,
  RawTypes,
  ForumsRequestOptions,
} from '../interfaces'

const REQ_URL: string = 'https://bbs-api-os.hoyolab.com/community/post/wapi/mainpage/'

export class ForumsRequest extends HttpsClient {

  constructor () {
    super(REQ_URL, {
      method: 'GET',
      headers: { 'x-rpc-language': 'en-US' },
    })
  }

  willSendRequest: HttpsRequestInterceptor = (url: URL): void => {
    console.info(`Outgoing request to: ${url.toString()}`)
  }

  async getPosts ({
    isHot,
    isGood,
    pageLimit
  }: ForumsRequestOptions): Promise<Forums> {
    const requestUrl = `withType?gids=2&is_good=${isGood}&is_hot=${isHot}&page_limit=${pageLimit}`

    try {
      let data: string = ''
      let response: Forums = []
      const incomingMessage = await this.get(requestUrl)

      incomingMessage.on('data', (chunk: Buffer) => {
        data += chunk
      })

      incomingMessage.on('end', () => {
        const parsedData = JSON.parse(data) as RawTypes.RawForumResponse;

        console.info(parsedData)
      })

      return response
    } catch (error) {
      throw new error
    }
  }

}
