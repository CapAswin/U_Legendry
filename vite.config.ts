import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  base: "/U_Legendry/",
  plugins: [react(), tailwindcss()],
});
