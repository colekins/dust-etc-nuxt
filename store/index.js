export const state = () => ({
  blogPosts: fillStore()
})

export const mutations = {
  setBlogPosts(state, list) {
    state.blogPosts = list
  }
}

const fillStore = () => {
  const files = require.context('~/assets/content/blog/', false, /\.json$/)
  const blogPosts = files.keys().map((key) => {
    const res = files(key)
    res.slug = key.slice(2, -5)
    return res
  })

  return blogPosts
}
