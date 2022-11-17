import { createPortal } from "react-dom"
import "./idnex.scss"

import { SupportMenu } from "../../../index"

interface BurgerMenuProps {
  className: "visible" | null
}

const BurgerMenu = ({ className }: BurgerMenuProps) => {
  const rootElement = document.getElementById("root") as Element | DocumentFragment

  return createPortal(
    <div className={"burger-menu " + className}>
      <div className="burger-menu-item">
        Projects
      </div>
      <div className="burger-menu-item">
        <SupportMenu />
      </div>
    </div>,
    rootElement
  )
}

export default BurgerMenu
