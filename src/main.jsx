import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"
//import { ReactLogo } from "@assets/svg";
import { MainLayout, Loader } from "@components"
import { RouterApp } from "@routes"
import { StoreProviders } from "./context"

const App = () => {
  return (
    <MainLayout>
      <RouterApp />
    </MainLayout>
  )
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <StoreProviders>
      <App />
    </StoreProviders>
  </React.StrictMode>
)
