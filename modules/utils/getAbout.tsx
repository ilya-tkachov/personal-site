import { cache } from 'react'
import 'server-only'
import { fetchGraphQL } from '../api/support'

export const preload_getAbout = (id: string) => {
  void getAbout(id)
}

export const getAbout = cache(async (id: string) => {
  const query = `
    query aboutEntryQuery($id: String!) {
      about(id: $id) {
        sys {
          id
        }
        avatar {
            width
            height
            title
            url
        }
        title
        description {
          json
        }
      }
    }
  `

  return fetchGraphQL(query, { id })
})
