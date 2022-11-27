import { useEffect, useContext } from "react"
import { Routes, Route, useLocation } from "react-router-dom"
import { Home } from "@pages/Home"
import { Search } from "@pages/Search"
import { StoreContext } from "@context"

export const paths = {
  login: {
    title: "",
    pathname: "",
    display: "",
  },
  not_authorized: {
    title: "",
    pathname: "",
    display: "",
  },
  page404: {
    title: "",
    pathname: "",
    display: "",
  },
  home: {
    title: "Home Page",
    pathname: "/home",
    display: "",
  },
  search: {
    title: "Search",
    pathname: "/search",
    display: "",
  },
  detailed: {
    title: "",
    pathname: "",
    display: "",
  },
}

export const RouterApp = () => {
  const location = useLocation()
  const { pageView, setPageView } = useContext(StoreContext)

  useEffect(() => {
    if (location.pathname.replaceAll("/", "") !== pageView) {
      if (setPageView) {
        setPageView(location.pathname.replaceAll("/", ""))
      }
    }
  }, [])

  return (
    <Routes>
      {["/", "home", "/home"].includes(location.pathname) && (
        <Route path={location.pathname} element={<Home />} />
      )}
      <Route path={paths.search.pathname} element={<Search />} />
    </Routes>
  )
}
