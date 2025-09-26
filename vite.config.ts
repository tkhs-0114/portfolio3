import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig(({ command }) => {
  const base = command === "build" ? "/portfolio3/" : "/";

  return {
    plugins: [react()],
    base,
  };
});
