import styles from "./Layout.module.scss"
import { useTranslation } from "react-i18next"
import { useLocation } from "react-router-dom"
import { Header } from "@components"

export const MainLayout = ({ children }) => {
  const { pathname } = useLocation()
  const { i18n, t } = useTranslation()
  const { dir, language } = i18n

  return (
    <>
      <Header />
      <div className={styles.mainContainer}>{children}</div>
    </>
  )
}
