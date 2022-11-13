import "./index.scss"

interface BurgerMenuButtonProps {
  onClick: () => void
}

const BurgerMenuButton = ({ onClick }: BurgerMenuButtonProps) => {
  return (
    <div
      className="menu-icon"
      onClick={onClick}
    >
      <input
        id="checkbox"
        className="menu-icon__cheeckbox"
        type="checkbox"
      />
      <div>
        <span></span>
        <span></span>
      </div>
    </div>
  )
}

export default BurgerMenuButton
