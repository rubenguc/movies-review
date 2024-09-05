import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { router } from "./Routes.tsx";
import "./i18n"
import "./index.css"

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

createRoot(document.getElementById("root")!).render(<App />);
