import { Outlet } from "react-router-dom"

import { Footer, Header, MobileHeader } from "../index"
import useMobile from "../../hooks/useMobile"

const RootLayout = () => {
  const { mobile } = useMobile()

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
