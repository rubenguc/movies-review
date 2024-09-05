import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css"
import { router } from "./Routes.tsx";

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}


createRoot(document.getElementById("root")!).render(<App />);
