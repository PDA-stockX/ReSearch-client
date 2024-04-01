import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": {
        target: import.meta.env.VITE_API_URL,
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/,
            import.meta.env.mode === "production" ? "/api" : ""),
      },
    },
  },
  resolve: {
    alias: [
      // 절대 경로로 접근하기
      { find: "~/api", replacement: "/src/api" },
      { find: "~/assets", replacement: "/src/assets" },
      { find: "~/components", replacement: "/src/components" },
      { find: "~/layout", replacement: "/src/layout" },
      { find: "~/lib", replacement: "/src/lib" },
      { find: "~/utils", replacement: "/src/utils" },
      { find: "~/routers", replacement: "/src/routers" },
      { find: "~/pages", replacement: "/src/pages" },
      { find: "~/reducers", replacement: "/src/reducers" },
      { find: "~/hooks", replacement: "/src/hooks" },
      { find: "~/styles", replacement: "/src/styles" },
      { find: "~/public", replacement: "/public" },
    ],
  },
});
