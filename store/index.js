import config from "@/config"

export const actions = {
  nuxtServerInit({ dispatch }) {
    Object.values(config.dialogs).forEach((dialog) =>
      dialog.initial.discussion.forEach((message) =>
        dispatch("messages/add", { dialogId: dialog.id, ...message })
      )
    )
  },
}
