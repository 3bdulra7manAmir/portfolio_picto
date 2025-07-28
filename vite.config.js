import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  //   COMMENT: server object is used for testing responsive design on different devices
  //   server: {
  //     open: true,
  //     host: false, // Allow access from network devices
  //     proxy: {
  //       "/api": {
  //         target: "http://localhost:5000",
  //         changeOrigin: true,
  //         secure: true,
  //       },
  //     },
  //   },
});
