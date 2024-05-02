import { nodeResolve } from "@rollup/plugin-node-resolve";
import typescript from "@rollup/plugin-typescript";
import terser from "@rollup/plugin-terser";

export default [
  {
    input: "./scripts/scrollbar-slider-indicator/script.ts",
    output: {
      file: "./dist/scrollbar-slider-indicator.js",
      format: "iife",
    },
    plugins: [nodeResolve({ extensions: [".ts"] }), typescript(), terser()],
  },
];
