import "./idnex.scss"
import { SupportMenu } from "../../../index"

interface BurgerMenuProps {
  className: "visible" | null
}

const BurgerMenu = ({ className }: BurgerMenuProps) => {
  return (
    <div className={"burger-menu " + className}>
      <div className="burger-menu-item">
        Projects
      </div>
      <div className="burger-menu-item">
        <SupportMenu />
      </div>
    </div>
  )
}

export default BurgerMenu
