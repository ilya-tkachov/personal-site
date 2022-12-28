import { cache } from 'react'
import 'server-only'
import { fetchGraphQL } from '../api/support'

export const preload_getPortfolioCollection = (limit: string) => {
  void getPortfolioCollection(limit)
}

export const getPortfolioCollection = cache(async (limit: string = '5') => {
  const query = `
    query portfolioCollectionQuery($limit: Int!) {
      portfolioCollection(limit: $limit) {
        limit
        total
        items {
          sys {
            id
          }
          preview {
              width
              height
              title
              url
          }
          title
          description {
            json
          }
          tags
        }
      }
    }
  `

  return fetchGraphQL(query, { limit: parseInt(limit) })
})
