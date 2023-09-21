/// <reference types="vitest" />
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base:"/proficiency_novice/",
  plugins: [react()],
  test: {
    globals: true,
    environment: "jsdom",
  },
});
