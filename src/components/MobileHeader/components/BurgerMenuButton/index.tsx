import "./index.scss"

interface BurgerMenuButtonProps {
  onClick: () => void
  checked: boolean
}

const BurgerMenuButton = ({ onClick, checked }: BurgerMenuButtonProps) => {
  return (
    <div
      className="menu-icon"
      onClick={onClick}
    >
      <input
        id="checkbox"
        className="menu-icon__cheeckbox"
        type="checkbox"
        checked={checked}
      />
      <div>
        <span></span>
        <span></span>
      </div>
    </div>
  )
}

export default BurgerMenuButton
