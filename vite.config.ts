import { defineConfig } from "vite";
import dyadComponentTagger from "@dyad-sh/react-vite-component-tagger";
import react from "@vitejs/plugin-react-swc";
import path from "path";

import { cloudflare } from "@cloudflare/vite-plugin";

export default defineConfig(() => ({
  base: "/", // Changed to root path for user/organization pages
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [dyadComponentTagger(), react(), cloudflare()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));