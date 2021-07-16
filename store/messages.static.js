import Vue from "vue"
import { LOGGED_IN_AUTHOR, REPLY_TIMEOUT } from "@/model/constants"

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
            content:
              "An dieser Kreuzung schlage ich einen großen Zebrastreifen für Fußgänger vor.",
          }),
        REPLY_TIMEOUT
      )

      setTimeout(
        () =>
          dispatch("add", {
            dialogId: message.dialogId,
            content:
              "Ich wünsche mir einen neuen Fahrradweg an dieser Kreuzung.",
          }),
        REPLY_TIMEOUT * 2
      )
    }
  },
}
