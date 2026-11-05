import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
// Relative base keeps the static build working under any GitHub Pages path.
export default defineConfig({ base: "./", plugins: [react()] });
