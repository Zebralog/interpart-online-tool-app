import Vue from "vue"
import axios from "axios"
// import { LOGGED_IN_AUTHOR, REPLY_TIMEOUT } from "@/model/constants"
// import { LOGGED_IN_AUTHOR } from "@/model/constants"
import config from "@/config"

export const state = () => ({
  messages: [],
  lastMessage: null,
  auth: {
    status: "",
    token: "",
  },
})

export const getters = {
  isLoggedIn: (state) => !!state.auth.token,
  authStatus: (state) => state.auth.status,
  all: (state) => state.messages,
  lastCreatedMessage: (state) => state.lastMessage,
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
    state.messages = [...state.messages, message]
    // Vue.set(state, "messages", [...state.messages, message])
  },
  addDummy: (state, message) => {
    // const bellId =
    //   config.api.dialogsToBells[
    //     message.dialogId in config.api.dialogsToBells
    //       ? message.dialogId
    //       : "default"
    //   ]
    const bellId = message.bell_id ?? 0
    const newMessage = { bellId, ...message }
    if (!("id" in newMessage)) {
      newMessage.id = Math.round(Math.random() * (99999 - 10000) + 10000)
    }
    Vue.set(state, "messages", [...state.messages, newMessage])
  },
  set: (state, messages) => {
    Vue.set(state, "messages", messages)
  },
  setLastMessage: (state, message) => {
    state.lastMessage = message
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
  loadItems: ({ state, commit }) => {
    axios
      .get(config.api.rest.messages.endpoints.getAll)
      .then((response) => response.data)
      .then((messages) => {
        let processed = {}
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
          processed[message.id] = {
            dialogId: dialogId,
            type: "text",
            date: new Date(message.timestamp),
            content: message.message,
            translationLanguage: translationLanguage,
            translatedContent: translation,
            ...message,
          }
        })

        // check with current state before overwriting
        state.messages.forEach((message) => {
          if ("id" in message && !(message.id in processed)) {
            processed[message.id] = message
          }
        })
        commit("set", Object.values(processed))
      })
  },
  add: async ({ commit, state }, message) => {
    if (state.auth.token) {
      // const bellId =
      //   config.api.dialogsToBells[
      //     message.dialogId in config.api.dialogsToBells
      //       ? message.dialogId
      //       : "default"
      //   ]
      const bellId = message.bell_id ?? 0
      const newMessage = {
        bell_id: bellId,
        message: message.content,
        language: message.language ?? "de",
        translations: {},
      }

      let { data } = await axios.post(
        config.api.rest.messages.endpoints.newMessage,
        newMessage,
        {
          headers: {
            Authorization: `Bearer ${state.auth.token}`,
          },
        }
      )
      if (data && "id" in data) {
        message.id = data.id
        commit("add", message)
        commit("setLastMessage", message)
      }
    } else {
      console.warn("messages/add[mut]: AUTH token not found")
    }
  },
  addDummy: ({ commit }, message) => {
    commit("addDummy", message)
    return message
  },
}
