import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": "http://localhost:3000", // express 포트번호
    },
  },
  resolve: {
    alias: [
      // 절대 경로로 접근하기
      { find: "~/components", replacement: "/src/components" },
      { find: "~/layout", replacement: "/src/layout" },
      { find: "~/lib", replacement: "/src/lib" },
      { find: "~/routers", replacement: "/src/routers" },
      { find: "~/pages", replacement: "/src/pages" },
      { find: "~/reducer", replacement: "/src/reducer" },
      { find: "~/hooks", replacement: "/src/hooks" },
      { find: "~/styles", replacement: "/src/styles" },
      {
        find: "~/Analyst/AnalystDetail",
        replacement: "/src/Analyst/AnalystDetail.jsx",
      },
      {
        find: "~/lib/assets/socket/socket",
        replacement: "/src/lib/assets/socket/socket.js",
      },
    ],
  },
});
