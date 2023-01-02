// Copyright (C) 2012-2023 Zammad Foundation, https://zammad-foundation.org/

import type { TicketQuery, TicketArticlesQuery } from '@shared/graphql/types'
import type { ConfidentTake } from '@shared/types/utils'

export type TicketById = TicketQuery['ticket']
export type TicketArticle = ConfidentTake<
  TicketArticlesQuery,
  'articles.edges.node'
>

export type TicketArticleAttachment = TicketArticle['attachments'][number]
