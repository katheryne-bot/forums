export interface RawForumResponse {
  retcode: number
  message: string
  data: RawForumPosts[]
}

export interface RawForumPosts {
  forum?: string
  user: RawForumUser
  stat: RawForumStat
  cover: RawForumCover
  help_sys: RawForumHelpSys
  image_list: RawForumImages[]
  posts: RawForumPost[]
  topics: RawForumTopic[]
  is_user_master: boolean
  is_official_master: boolean
  hot_reply_exist: boolean
  vote_count: number
  last_modify_time: number
  self_operation: SelfOperation
}

export interface RawForumImages {
  url: string
  height: number
  width: number
  format: string
  size: string
}

export interface RawForumHelpSys {
  top_up?: string
}

export interface RawForumCover {
  url: string
  height: number
  width: number
  format: string
  size: string
}

export interface RawForumStat {
  view_num: number
  reply_num: number
  like_num: number
  bookmark_num: number
  share_num: number
}

export interface RawForumUser {
  uid: string
  avatar: string
  gender: string
  nickname: string
  introduce: string
  level_exp: UserEXP
  avatar_url: string
  certfication: Certfication
}

export interface RawForumTopic {
  id: number
  name: string
  cover: string
  is_top: boolean
  is_good: boolean
  is_interactive: boolean
  game_id: number
}

export interface SelfOperation {
  attitude: number
  is_collected: number
}

export interface Certfication {
  type: number
  label: string
}

export interface UserEXP {
  exp: number
  level: number
}

export interface RawForumPost {
  post: PostInfo
}

export interface PostInfo {
  uid: string

  lang: string
  cover: string
  game_id: number
  post_id: string
  subject: string
  content: string
  images: string[]

  max_floor: number
  view_type: number
  created_at: number
  f_forum_id: number

  reply_time: string
  is_deleted: number
  topic_ids: string[]
  view_status: number
  is_original: number
  official_type: number
  post_status: PostStatus
  is_interactive: boolean
  structured_content: string
  republish_authorization: number
}

export interface PostStatus {
  is_top: boolean
  is_good: boolean
  is_official: boolean
}
