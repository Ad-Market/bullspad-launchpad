import { classNames } from "@knownout/lib"
import "./index.scss"

import { ArrowIcon } from "../Icon"
import { DropdownMenu } from "../index"
import useMobile from "../../hooks/useMobile"
import useAnimation from "../../hooks/useAnimation"

const SupportMenu = () => {
  const {
    elementAppear,
    elementVisible,
    elementCallHandler,
    elementAppearHandler,
    elementDisappearHandler
  } = useAnimation()
  const { mobile } = useMobile()

  const dropdownMenuItems = ["FAQ", "Documents", "Support service"]

  return (
    <div
      className={classNames(
        "support-btn",
        elementAppear && "dropdown-visible",
      )}
      onMouseOver={mobile ? () => {} : elementAppearHandler}
      onMouseLeave={mobile ? () => {} :elementDisappearHandler}
      onClick={mobile ? elementCallHandler : () => {}}
    >
      Support
      <ArrowIcon />
      {elementVisible && (
        <DropdownMenu className="support-dropdown">
          {dropdownMenuItems.map(item => <div key={item}>{item}</div>)}
        </DropdownMenu>
      )}
    </div>
  )
}

export default SupportMenu
