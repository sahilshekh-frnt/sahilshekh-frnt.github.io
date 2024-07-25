import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/", // Set base to the repository name
  plugins: [react()],
  build: {
    outDir: "dist",
    assetsDir: "assets",
  },
  assetsInclude: ["**/*.glb"],
});
