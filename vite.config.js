// https://vite.dev/config/
// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/Nextinn_Technology/",
  plugins: [react()],
  server: {
    host: true, // <-- This allows LAN access
    port: 5173, // optional (default)
  },
});
