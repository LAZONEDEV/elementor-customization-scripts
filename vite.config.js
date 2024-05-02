import { fileURLToPath } from "node:url";
import { defineConfig } from "vite";

export default defineConfig({
  resolve: {
    alias: [
      {
        find: "@/slider-bar-indicator",
        replacement: fileURLToPath(
          new URL("./scripts/scrollbar-slider-indicator", import.meta.url)
        ),
      },
      {
        find: "@",
        replacement: fileURLToPath(new URL("./", import.meta.url)),
      },
    ],
  },
});
