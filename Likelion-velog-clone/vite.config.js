import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/boards": {
        target: "http://3.34.217.44",
        changeOrigin: true,
      },
    },
  },
});
