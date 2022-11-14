import "./index.scss"
import { classNames } from "@knownout/lib"

interface DropdownMenuProps {
  children: any
  className?: string
}

const DropdownMenu = ({ children, className }: DropdownMenuProps) => {
  return (
    <div
      className={classNames(
        "dropdown-menu",
        className && className
      )}
    >
      {children}
    </div>
  )
}

export default DropdownMenu
