import { useEffect, useState } from "react"

export default function useHeaderFixed() {
  const [scrollUp, setScrollUp] = useState(false)
  const [scrollPosition, setScrollPosition] = useState(0)
  const [animationOn, setAnimationOn] = useState(false)

  useEffect(() => {

    const onScroll = () => {
      setScrollPosition(window.scrollY)
      const headerHeight = document.querySelector(".header")?.clientHeight as Number

      if (window.scrollY < headerHeight) {
        if (scrollUp && window.scrollY === 0) {
          setScrollUp(false)
        }
        return
      }

      if (scrollPosition > window.scrollY) {
        setScrollUp(true)
        setAnimationOn(false)
      } else {
        setAnimationOn(true)
        setTimeout(() => {
          setScrollUp(false)
        }, 200)
      }
    }

    window.addEventListener("scroll", onScroll)

    return () => {
      window.removeEventListener("scroll", onScroll)
    }
  }, [
    scrollPosition,
    scrollUp
  ])

  return {
    scrollUp,
    animationOn
  }
}
