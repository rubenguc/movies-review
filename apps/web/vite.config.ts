import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { TanStackRouterVite } from "@tanstack/router-plugin/vite";

const env = process.env;

export default defineConfig({
  define: {
    // this env comes from global turborepo .env
    "process.env": JSON.stringify({
      VITE_FIREBASE_API_KEY: env.FIREBASE_API_KEY,
      VITE_FIREBASE_AUTH_DOMAIN: env.FIREBASE_AUTH_DOMAIN,
      VITE_FIREBASE_PROJETCT_ID: env.FIREBASE_PROJETCT_ID,
      VITE_FIREBASE_STORAGE_BUCKET: env.FIREBASE_STORAGE_BUCKET,
      VITE_FIREBASE_APP_ID: env.FIREBASE_APP_ID,
      VITE_FIREBASE_MESSAGE_SENDER_ID: env.FIREBASE_MESSAGE_SENDER_ID,
    }),
  },
  plugins: [TanStackRouterVite(), react()],
  server: {
    port: 5000,
  },
});
