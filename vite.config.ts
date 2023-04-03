/// <reference types="vitest" />

import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { resolve } from "path";
import env from "vite-plugin-env-compatible";

export default defineConfig({
  plugins: [
    react(),
    // eslint(),
    env({ prefix: "VITE", mountedPath: "process.env" }),
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

    // https://vitest.dev/config/#snapshotformat
    resolveSnapshotPath: (_, snapExtension) =>
      resolve(__dirname, "./src/__snapshots__/" + "snapshot" + snapExtension),
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
