//vite.config.js
import { resolve } from "path";
import { defineConfig } from "vite";
import dts from 'vite-plugin-dts';

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.tsx"),
      name: "sonda-react-kit",

      fileName: "index",
    },
    rollupOptions: {
      external: ["React"],
    },
  },
  plugins: [dts()]
});
