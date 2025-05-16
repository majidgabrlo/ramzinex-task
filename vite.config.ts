import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import svgr from "vite-plugin-svgr";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    svgr({
      svgrOptions: {
        exportType: "default",
        icon: true,
        svgo: false, // Try adding this if issues persist
      },
      include: "**/*.svg",
      esbuildOptions: {
        loader: "tsx", // Ensure proper JSX transformation
      },
    }),
  ],
});
