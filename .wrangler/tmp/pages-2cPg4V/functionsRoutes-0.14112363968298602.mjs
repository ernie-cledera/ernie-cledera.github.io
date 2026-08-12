import { onRequestPost as __api_chat_ts_onRequestPost } from "C:\\Users\\jeffc\\dyad-apps\\ernie-cledera.github.io\\functions\\api\\chat.ts"
import { onRequestGet as __api_visits_ts_onRequestGet } from "C:\\Users\\jeffc\\dyad-apps\\ernie-cledera.github.io\\functions\\api\\visits.ts"
import { onRequestOptions as __api_visits_ts_onRequestOptions } from "C:\\Users\\jeffc\\dyad-apps\\ernie-cledera.github.io\\functions\\api\\visits.ts"
import { onRequestPost as __api_visits_ts_onRequestPost } from "C:\\Users\\jeffc\\dyad-apps\\ernie-cledera.github.io\\functions\\api\\visits.ts"

export const routes = [
    {
      routePath: "/api/chat",
      mountPath: "/api",
      method: "POST",
      middlewares: [],
      modules: [__api_chat_ts_onRequestPost],
    },
  {
      routePath: "/api/visits",
      mountPath: "/api",
      method: "GET",
      middlewares: [],
      modules: [__api_visits_ts_onRequestGet],
    },
  {
      routePath: "/api/visits",
      mountPath: "/api",
      method: "OPTIONS",
      middlewares: [],
      modules: [__api_visits_ts_onRequestOptions],
    },
  {
      routePath: "/api/visits",
      mountPath: "/api",
      method: "POST",
      middlewares: [],
      modules: [__api_visits_ts_onRequestPost],
    },
  ]