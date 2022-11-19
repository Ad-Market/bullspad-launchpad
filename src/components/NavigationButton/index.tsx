import { classNames } from "@knownout/lib"

import "./index.scss"
import { ArrowIcon } from "../Icon"

interface NavigationButtonProps {
  className?: string
}

const NavigationButton = ({ className }: NavigationButtonProps) => {
  return (
    <button
      className={classNames(
        "navigation-button",
        className
      )}
    >
      <ArrowIcon />
    </button>
  )
}

export default NavigationButton
