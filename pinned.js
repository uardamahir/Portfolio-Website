onst LOGIN = 'uardamahir'
 
const QUERY = `
  query ($login: String!) {
    user(login: $login) {
      pinnedItems(first: 6, types: REPOSITORY) {
        nodes {
          ... on Repository {
            name
            description
            url
            homepageUrl
            stargazerCount
            primaryLanguage { name }
            repositoryTopics(first: 8) { nodes { topic { name } } }
          }
        }
      }
    }
  }
`
 
export default async function handler(req, res) {
  const token = process.env.GITHUB_TOKEN
 
  // Token yoksa boş dön → istemci sessizce yerel içeriğe (fallback) düşer.
  if (!token) {
    return res.status(200).json({ pinned: [], error: 'missing_token' })
  }
 
  try {
    const ghRes = await fetch('https://api.github.com/graphql', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
        'User-Agent': 'portfolio-pinned-fn',
      },
      body: JSON.stringify({ query: QUERY, variables: { login: LOGIN } }),
    })
 
    const json = await ghRes.json()
    const nodes = json?.data?.user?.pinnedItems?.nodes ?? []
 
    const pinned = nodes.map((n) => ({
      name: n.name,
      description: n.description || '',
      url: n.url,
      homepage: n.homepageUrl || null,
      stars: typeof n.stargazerCount === 'number' ? n.stargazerCount : 0,
      language: n.primaryLanguage?.name || null,
      topics: (n.repositoryTopics?.nodes || []).map((x) => x.topic.name),
    }))
 
    // Edge'de 1 saat cache + arka planda tazeleme. Pinler sık değişmez,
    // bu hem hızlı hem GitHub limitini korur.
    res.setHeader('Cache-Control', 's-maxage=3600, stale-while-revalidate=86400')
    return res.status(200).json({ pinned })
  } catch (e) {
    return res.status(200).json({ pinned: [], error: 'fetch_failed' })
  }
}
