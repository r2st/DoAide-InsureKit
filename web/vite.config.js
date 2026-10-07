import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  test: {
    environment: "jsdom",
  },
  server: {
    port: 3064,
    proxy: {
      "/api": {
        target: "http://localhost:3063",
        changeOrigin: true,
      },
      "/auth": {
        target: "http://localhost:3063",
        changeOrigin: true,
      },
    },
  },
});
