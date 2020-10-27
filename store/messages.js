import Vue from "vue"
import axios from "axios"
// import { LOGGED_IN_AUTHOR, REPLY_TIMEOUT } from "@/model/constants"
// import { LOGGED_IN_AUTHOR } from "@/model/constants"
import config from "@/config"

export const state = () => ({
  messages: [],
  auth: {
    status: "",
    token: "",
  },
})

export const getters = {
  isLoggedIn: (state) => !!state.auth.token,
  authStatus: (state) => state.auth.status,
  all: (state) => state.messages,
  byDialogId: (state) => (dialogId) =>
    state.messages.filter((message) => message.dialogId === dialogId),
}

export const mutations = {
  auth_request: (state) => {
    state.auth.status = "loading"
  },
  auth_success: (state, token) => {
    state.auth.status = "success"
    state.auth.token = token
  },
  auth_error: (state) => {
    state.auth.status = "error"
  },
  logout: (state) => {
    state.auth.status = ""
    state.auth.token = ""
  },
  add: (state, message) => {
    if (state.auth.token) {
      const bellId =
        config.api.dialogsToBells[
          message.dialogId in config.api.dialogsToBells
            ? message.dialogId
            : "default"
        ]
      const newMessage = {
        bell_id: bellId,
        message: message.content,
        language: "de",
        translations: {},
      }

      axios
        .post(config.api.rest.messages.endpoints.newMessage, newMessage, {
          headers: {
            Authorization: `Bearer ${state.auth.token}`,
          },
        })
        .then((response) => response.data)
      // .then((message) => { console.log(message); })
    }
  },
  set: (state, messages) => {
    Vue.set(state, "messages", messages)
  },
}

export const actions = {
  login: ({ commit }, user) => {
    return new Promise((resolve, reject) => {
      commit("auth_request")
      axios({
        url: config.api.rest.messages.endpoints.login,
        data: user,
        method: "POST",
      })
        .then((resp) => {
          const token = resp.data.token
          // localStorage.setItem("token", token)
          axios.defaults.headers.common["Authorization"] = token
          commit("auth_success", token)
          resolve(resp)
        })
        .catch((err) => {
          commit("auth_error")
          console.error(err)
          // localStorage.removeItem("token")
          reject(err)
        })
    })
  },
  loadItems: ({ commit, state }) => {
    if (state.auth.token) {
      axios
        .get(config.api.rest.messages.endpoints.getAll, {
          headers: {
            Authorization: `Bearer ${state.auth.token}`,
          },
        })
        .then((response) => response.data)
        .then((messages) => {
          let processed = []
          messages.forEach((message) => {
            const dialogId =
              config.api.bellsToDialogs[
                message.bell_id in config.api.bellsToDialogs
                  ? message.bell_id
                  : "default"
              ]
            const translationLanguage = message.language == "de" ? "en" : "de"
            const translation =
              "translations" in message &&
              translationLanguage in message.translations
                ? message.translations[translationLanguage]
                : null
            processed.push({
              dialogId: dialogId,
              type: "text",
              date: new Date(message.timestamp),
              content: message.message,
              translationLanguage: translationLanguage,
              translatedContent: translation,
              ...message,
            })
          })
          commit("set", processed)
        })
    }
  },
  add: ({ commit }, message) => {
    commit("add", message)
  },
}
