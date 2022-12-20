export async function fetchGraphQL(query: string, variables: Record<string, any>, preview: boolean = false) {
  const res = await fetch(
    `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${preview
          ? process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN
          : process.env.CONTENTFUL_ACCESS_TOKEN
          }`
      },
      body: JSON.stringify({
        query, variables: { ...variables, preview }
      })
    }
  )

  if (res.ok === false) {
    console.log('!!Query Error: ', res.statusText)
    throw new Error('Failed to fetch data')
  }

  return res.json().then((val) => val.data)
}
