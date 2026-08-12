import { defineConfig, type Plugin } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { chatMiddleware } from "./vite/chat";
import { visitsMiddleware } from "./vite/visits";

function chatDevPlugin(): Plugin {
  return {
    name: "chat-api-dev",
    configureServer(server) {
      server.middlewares.use(chatMiddleware());
    },
  };
}

function visitsDevPlugin(): Plugin {
  return {
    name: "visits-api-dev",
    configureServer(server) {
      server.middlewares.use(visitsMiddleware());
    },
  };
}

export default defineConfig({
  plugins: [react(), chatDevPlugin(), visitsDevPlugin()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});