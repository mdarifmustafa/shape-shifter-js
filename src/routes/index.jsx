import { PatternSharp } from "@mui/icons-material";
import { Routes, Route } from "react-router-dom";
import { Home } from "@pages/Home";

export const paths = {
  login: {
    title: "",
    pathname: "",
    display: ""
  },
  not_authorized: {
    title: "",
    pathname: "",
    display: ""
  },
  page404: {
    title: "",
    pathname: "",
    display: ""
  },
  home: {
    title: "",
    pathname: "",
    display: ""
  },
  detailed: {
    title: "",
    pathname: "",
    display: ""
  }
}

export const RouterApp = () => {
  return (
    <Routes>
      <Route path={paths.home.pathname} element={<Home/>} />
    </Routes>
  )
}