import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

const ngrokHost =   "e5293b5df2b7.ngrok-free.app";

export default defineConfig(({ mode }) => ({
  server: {
    host: true,
    port: 3009,
    cors: true,
    allowedHosts: ngrokHost ? [ngrokHost] : [],
  },
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
