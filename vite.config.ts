/// <reference types="vitest" />

import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import eslint from "vite-plugin-eslint";
import { resolve } from "path";
import { createHtmlPlugin } from "vite-plugin-html";

export default defineConfig({
  plugins: [
    react(),
    eslint(),
    createHtmlPlugin({
      minify: true,
      entry: "src/index.tsx",
      template: "index.html",
    }),
  ],
  server: {
    host: true,
    port: 3000,
  },

  test: {
    globals: true,
    environment: "happy-dom",
    root: "./src/",
    setupFiles: "./vitest.setup.ts",
  },

  build: {
    outDir: resolve(__dirname, "dist"),
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, "/index.html"),
        404: resolve(__dirname, "/404.html"),
        albums: resolve(__dirname, "/albums.html"),
        diary: resolve(__dirname, "/diary.html"),
        jikosyoukai: resolve(__dirname, "/jikosyoukai.html"),
        link: resolve(__dirname, "/link.html"),
      },
    },
  },
});
