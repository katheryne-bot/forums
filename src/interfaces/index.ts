export * as RawTypes from './raw'

export type Forums = ForumResponse[]
export type PostReplies = ReplyResponse[]

export interface ForumsRequestOptions {
  isHot?: boolean
  isGood?: boolean
  forumId?: number
  pageLimit?: number
}

export interface ForumResponse {
  url: string
  title: string
  views: number
  author: string
  replies: number
  upvotes: number
  media: string[]
  authorAvatar: string
  authorProfile: string
}

export interface ReplyResponse {
  author: string
  authorAvatar: string
  authorProfile: string
}

export interface PostResponse {
  url: string
  favoritedBy: number
  forum: ForumResponse
  replies: PostReplies
  originallyFrom: Origin
}

export interface Origin {
  originUrl: string
  originName: string
}
