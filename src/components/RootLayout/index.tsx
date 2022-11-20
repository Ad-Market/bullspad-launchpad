import { useEffect } from "react"
import { Outlet, useLocation } from "react-router-dom"

import { Footer, Header, MobileHeader } from "../index"
import useMobile from "../../hooks/useMobile"

const RootLayout = () => {
  const location = useLocation()
  const { mobile } = useMobile()

  useEffect(() => {
    window.scrollTo({ top: 0 })
  }, [ location.pathname ])

  return (
    <>
      {mobile ? <MobileHeader /> : <Header />}
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

export default RootLayout
