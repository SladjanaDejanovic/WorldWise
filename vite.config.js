import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import eslint from "vite-plugin-eslint";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    eslint({
      overrideConfig: {
        rules: {
          "no-unused-vars": "warn",
        },
      },
    }),
  ],
});

// overrideConfig was added so vite wont crush the app every time i have unused values
