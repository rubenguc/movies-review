import { GlobalWrapper } from "./components/layout"
import { RouterProvider } from "@tanstack/react-router"
import { router } from "./Routes"

export default function App() {

  return (
    <GlobalWrapper>
      <div
        style={{
          maxWidth: "1024px",
          marginLeft: "auto",
          marginRight: "auto",
          width: "100%",
          padding: "0.5rem 1rem"
        }}
      >
        <RouterProvider router={router} />
      </div>
    </GlobalWrapper>
  )
}