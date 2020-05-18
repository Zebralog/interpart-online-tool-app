export const state = () => ({ exists: false })

export const getters = {
  exists: (state) => state.exists,
}

export const mutations = {
  create: (state) => (state.exists = true),
  destroy: (state) => (state.exists = false),
}

export const actions = {
  create: ({ dispatch }) => dispatch("create"),
  destroy: ({ dispatch }) => dispatch("destroy"),
}
