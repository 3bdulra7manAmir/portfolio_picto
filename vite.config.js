import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  return {
    base: `/${env.VITE_REPO_NAME}/`,
    plugins: [react(), tailwindcss()],
    //   COMMENT: server object is used for testing responsive design on different devices
    // server: {
    //   open: true,
    //   host: true, // Allow access from network devices
    //   proxy: {
    //     "/api": {
    //       target: "http://localhost:5000",
    //       changeOrigin: true,
    //       secure: true,
    //     },
    //   },
    // },
  };
});
