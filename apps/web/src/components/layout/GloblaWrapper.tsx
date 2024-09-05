import { ConfigProvider } from "antd";
import { PropsWithChildren } from "react"


export default function GloblaWrapper({ children }: PropsWithChildren) {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#f8b554"
        }
      }}
    >
      {children}
    </ConfigProvider>
  )
}
