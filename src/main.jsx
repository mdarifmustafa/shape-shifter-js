import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"
import { ReactLogo } from "@assets/svg"
import { Loader } from "@components"
import { RouterApp } from "@routes"
import { StoreProviders } from "./context"

const App = () => {
  return (
    <div className=".mainContainer">
      <>
        <RouterApp />
      </>
    </div>
  )
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <StoreProviders>
      <App />
    </StoreProviders>
  </React.StrictMode>
)
