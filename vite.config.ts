import { defineConfig } from "vite";
import tsConfigPaths from "vite-tsconfig-paths";
import tailwindcss from "@tailwindcss/vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import { nitro } from "nitro/vite";
import viteReact from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [
    // Resolves the "@/*" alias from tsconfig.json.
    tsConfigPaths(),
    // File-based routing, SSR and server functions. src/server.ts and
    // src/start.ts are picked up by convention.
    tanstackStart(),
    // Build target. "vercel" writes .vercel/output, which Vercel deploys as-is.
    // Set NITRO_PRESET for any other host (node-server, netlify, bun, …).
    nitro({ preset: process.env["NITRO_PRESET"] || "vercel" }),
    // React's plugin must come after TanStack Start's.
    viteReact(),
    tailwindcss(),
  ],
  resolve: {
    // A second copy of React breaks hooks; keep one instance across the graph.
    dedupe: ["react", "react-dom"],
  },
});
