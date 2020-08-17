import Vue from "vue"
import { LOGGED_IN_AUTHOR, REPLY_TIMEOUT } from "@/model/constants"
// import { LOGGED_IN_AUTHOR } from "@/model/constants"

export const state = () => ({ messages: [] })

export const getters = {
  all: (state) => state.messages,
  byDialogId: (state) => (dialogId) =>
    state.messages.filter((message) => message.dialogId === dialogId),
}

export const mutations = {
  add: (state, message) =>
    Vue.set(state, "messages", [...state.messages, message]),
}

export const actions = {
  add: ({ dispatch, commit }, message) => {
    const date = new Date()
    commit("add", { date, ...message })

    if (message.author === LOGGED_IN_AUTHOR) {
      setTimeout(
        () =>
          dispatch("add", {
            dialogId: message.dialogId,
            author: "Max Mustermann",
            content:
              "An dieser Kreuzung schlage ich einen großen Zebrastreifen als Fußgänger vor.",
          }),
        REPLY_TIMEOUT
      )

      setTimeout(
        () =>
          dispatch("add", {
            dialogId: message.dialogId,
            author: "Klaus Klausterman",
            content:
              "Ich wünsche mir z.B. besonders mehr Platz für einen neuen und sicheren Fahrradweg an dieser Kreuzung.",
          }),
        REPLY_TIMEOUT * 2
      )
    }
  },
}
