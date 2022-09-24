import { defineConfig } from "tsup";

export default defineConfig({
  entry: {
    "index": "./src/index.tsx",
  },
  external: ["react"],
  dts: true,
});
