import "./index.scss"
import {
  Instructions,
  Introduction,
  Partners,
  Team
} from "./components"

const MainPage = () => {
  return (
    <div className="main-page-container">
      <Introduction />
      <Instructions />
      <Team />
      <Partners />
    </div>
  )
}

export default MainPage
