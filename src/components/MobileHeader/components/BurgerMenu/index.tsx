import { createPortal } from "react-dom"
import { useNavigate } from "react-router-dom"
import "./idnex.scss"

import { SupportMenu } from "../../../index"

interface BurgerMenuProps {
  className: "visible" | null
  onMenuCall: () => void
}

const BurgerMenu = ({ className, onMenuCall }: BurgerMenuProps) => {
  const navigate = useNavigate()
  const rootElement = document.getElementById("root") as Element | DocumentFragment
  const onClickHandler = () => {
    navigate("/projects")
    onMenuCall()
  }

  return createPortal(
    <div className={"burger-menu " + className}>
      <div
        className="burger-menu-item"
        onClick={onClickHandler}
      >
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
