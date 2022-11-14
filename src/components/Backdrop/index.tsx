import "./index.scss"
import { createPortal } from "react-dom"

interface BackdropProps {
  onClick: () => void
}

const Backdrop = ({ onClick }: BackdropProps) => {
  const rootElement = document.getElementById("root") as Element | DocumentFragment

  return createPortal(
    <div className="backdrop" onClick={onClick} />,
    rootElement,
  )
}

export default Backdrop
