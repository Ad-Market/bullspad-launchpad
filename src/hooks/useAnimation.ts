import { useState } from "react"

interface UseAnimationProps {
  duration: number
}

export interface IUseAnimation {
  elementAppearHandler: () => void
  elementDisappearHandler: () => void
  elementCallHandler: () => void
  elementVisible: boolean
  elementAppear: boolean
}
export default function useAnimation({ duration }: UseAnimationProps): IUseAnimation  {
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
      }, duration)
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
    }, duration)
  }

  return {
    elementAppear,
    elementVisible,
    elementAppearHandler,
    elementDisappearHandler,
    elementCallHandler
  }
}
