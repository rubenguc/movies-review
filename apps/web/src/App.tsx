import { RouterProvider } from "@tanstack/react-router";
import { router } from "./Routes";
import { AuthProvider } from "./providers";

export default function App() {
  return (
    <AuthProvider>
      <div className="max-w-5xl mx-auto w-full p-2 flex flex-col flex-1 min-h-dvh">
        <RouterProvider router={router} />
      </div>
    </AuthProvider>
  );
}
