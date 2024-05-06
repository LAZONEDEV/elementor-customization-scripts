import { nodeResolve } from "@rollup/plugin-node-resolve";
import typescript from "@rollup/plugin-typescript";
import terser from "@rollup/plugin-terser";

const commonPlugins = [nodeResolve({ extensions: [".ts"] }), typescript(), terser()]
export default [
  {
    input: "./scripts/scrollbar-slider-indicator/script.ts",
    output: {
      file: "./dist/scrollbar-slider-indicator.js",
      format: "iife",
    },
    plugins: commonPlugins,
  },
  {
    input: "./scripts/remote-slider-navigation-handler/script.ts",
    output: {
      file: "./dist/remote-slider-navigation-handler.js",
      format: "iife",
    },
    plugins: commonPlugins,
  },
];
