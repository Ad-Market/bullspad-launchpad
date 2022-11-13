import { useState } from "react"
import { NavLink } from "react-router-dom"

import "./index.scss"
import { Button, ProfileButton } from "../index"
import { BULLSPAD_LOGO } from "../../theme/sources"

import BurgerMenu from "./components/BurgerMenu"
import BurgerMenuButton from "./components/BurgerMenuButton"
import useAnimation from "../../hooks/useAnimation"

const MobileHeader = () => {
  const [loggedIn, isLoggedIn] = useState(true)
  const { elementAppear, elementVisible, elementCallHandler } = useAnimation()

  return (
    <>
      <div className="mobile-header">
        <div className="right">
          <BurgerMenuButton onClick={elementCallHandler} />
          {loggedIn ? (
            <ProfileButton />
          ) : (
            <>
              <Button
                size="small"
                color="black-n-green"
                onClick={() => {}}
              >
                Log In
              </Button>
              <Button
                size="small"
                color="black-n-green"
                onClick={() => {}}
              >
                Sign Up
              </Button>
            </>
          )}
        </div>
        <NavLink to={"/"}>
          <img
            src={BULLSPAD_LOGO}
            alt=""
            className="logo"
            width="104px"
            height="12px"
          />
        </NavLink>
        {elementVisible && <BurgerMenu className={elementAppear ? "visible" : null}/>}
      </div>
    </>
  )
}

export default MobileHeader
