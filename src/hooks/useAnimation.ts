import { useState } from "react"


export interface IUseAnimation {
  elementAppearHandler: () => void
  elementDisappearHandler: () => void
  elementCallHandler: () => void
  elementVisible: boolean
  elementAppear: boolean
}
export default function useAnimation(): IUseAnimation  {
  const [elementVisible, setElementVisible] = useState(false)
  const [elementAppear, setElementAppear] = useState(false)

  const elementCallHandler = () => {
    if (!elementVisible) {
      setElementAppear(true)
      setElementVisible(true)
    } else {
      setElementAppear(false)
      setTimeout(() => {
        setElementVisible(false)
      }, 200)
    }
  }

  const elementAppearHandler = () => {
    setElementAppear(true)
    setElementVisible(true)
  }

  const elementDisappearHandler = () => {
    setElementAppear(false)

    setTimeout(() => {
      setElementVisible(false)
    }, 200)
  }

  return {
    elementAppear,
    elementVisible,
    elementAppearHandler,
    elementDisappearHandler,
    elementCallHandler
  }
}
