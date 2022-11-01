import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import eslint from "vite-plugin-eslint";
import { resolve } from "path";

const PUBLIC_PATH = resolve(__dirname, "public");

export default defineConfig({
  root: PUBLIC_PATH,
  plugins: [react(), eslint()],
  server: {
    host: true,
    port: 3000,
  },
  build: {
    outDir: resolve(__dirname, "dist"),
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(PUBLIC_PATH, "/index.html"),
        404: resolve(PUBLIC_PATH, "/404.html"),
        albums: resolve(PUBLIC_PATH, "/albums.html"),
        diary: resolve(PUBLIC_PATH, "/diary.html"),
        jikosyoukai: resolve(PUBLIC_PATH, "/jikosyoukai.html"),
        link: resolve(PUBLIC_PATH, "/link.html"),
      },
    },
  },
});
