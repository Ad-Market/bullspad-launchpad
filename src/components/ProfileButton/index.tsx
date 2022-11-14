import { classNames } from "@knownout/lib"
import "./index.scss"

import { LogoutIcon, ProfileIcon } from "../Icon"
import { Backdrop, DropdownMenu } from "../index"
import useAnimation from "../../hooks/useAnimation"

const ProfileButton = () => {
  const {
    elementAppear,
    elementVisible,
    elementCallHandler,
  } = useAnimation()

  return (
    <>
      <div
        className={classNames(
          "profile-button",
          elementAppear && "profile-dropdown-visible",
        )}
      >
        <button
          className="round-button"
          onClick={elementCallHandler}
        >
          <ProfileIcon />
        </button>
        {elementVisible && (
          <DropdownMenu className="profile-dropdown">
            <div>xxxxxxx00@gmail.com</div>
            <div>
              Log out
              <LogoutIcon />
            </div>
          </DropdownMenu>
        )}
      </div>
      {elementVisible && <Backdrop onClick={elementCallHandler} />}
    </>
  )
}

export default ProfileButton
