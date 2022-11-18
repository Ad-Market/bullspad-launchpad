import "./index.scss"
import {
  Instructions,
  Introduction,
  Partners, Projects,
  Team,
} from "./components"

const MainPage = () => {
  return (
    <div className="main-page-container">
      <Introduction />
      <Projects />
      <Instructions />
      <Team />
      <Partners />
    </div>
  )
}

export default MainPage
