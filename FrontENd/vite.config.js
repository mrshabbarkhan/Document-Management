import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": {
        target: "https://document-management-3.onrender.com/",
        changeOrigin: true,
        secure: false,
      },
    },
  },
});
