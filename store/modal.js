import Vue from "vue"

export const state = () => ({ exists: false })

export const getters = {
  exists: (state) => state.exists,
}

export const mutations = {
  create: (state) => Vue.set(state, "exists", true),
  destroy: (state) => Vue.set(state, "exists", false),
}

export const actions = {
  create: ({ commit }) => commit("create"),
  destroy: ({ commit }) => commit("destroy"),
}
