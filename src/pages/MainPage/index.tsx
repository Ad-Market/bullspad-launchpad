import "./index.scss"
import { Instructions, Introduction, Team } from "./components"

const MainPage = () => {
  return (
    <div className="main-page-container">
      <Introduction />
      <Instructions />
      <Team />
    </div>
  )
}

export default MainPage
