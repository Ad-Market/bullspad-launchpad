import { useNavigate } from "react-router-dom"
import "./index.scss"

import { ArrowIcon } from "../../components/Icon"

import { Card, ProjectDetails } from "./components"

const ProjectPage = () => {
  const navigate = useNavigate()

  return (
    <div className="project-page">
      <div className="navigation-bar">
        <div
          className="previous-pages"
          onClick={() => navigate("/")}
        >
          Home
        </div>
        <ArrowIcon />
        <div
          className="previous-pages"
          onClick={() => navigate("/projects")}
        >
          Projects
        </div>
        <ArrowIcon />
        <div className="current-page">
          Zombo Ducks PvP Fighter
        </div>
      </div>
      <div className="project-title">
        Zombo Duck PvP Fighter
      </div>
      <div className="project-details">
        <ProjectDetails />
        <Card />
      </div>
    </div>
  )
}

export default ProjectPage
