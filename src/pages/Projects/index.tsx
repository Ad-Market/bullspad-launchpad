import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { classNames } from "@knownout/lib"
import "./index.scss"

import { ArrowIcon } from "../../components/Icon"
import { DUMMY_PROJECTS } from "../../theme/sources"
import { MobileFilter, ProjectCard, StatusFilter } from "../../components"
import useMobile from "../../hooks/useMobile"

const Index = () => {
  const [filterVisible, setFilterVisible] = useState(false)
  const navigate = useNavigate()
  const { mobile } = useMobile()

  return (
    <div className="projects-page">
      <div className="navigation-bar">
        <div
          className="previous-pages"
          onClick={() => navigate("/")}
        >
          Home
        </div>
        <ArrowIcon />
        <div className="current-page">
          Projects
        </div>
      </div>
      <div
        className={classNames(
          "title",
          filterVisible && "visible",
        )}
      >
        Projects
        {mobile && (
          <>
            <MobileFilter
              onClick={() => setFilterVisible(!filterVisible)}
              checked={filterVisible}
            />
            <StatusFilter />
          </>
        )}
      </div>
      {!mobile && (
        <>
          <div className="description">
            Select a project from upcoming and live top tier ecosystem IDO
          </div>
          <StatusFilter />
        </>
      )}
      <div className="cards">
        {DUMMY_PROJECTS.map(project => (
          <ProjectCard
            key={project.title}
            bannerURL={project.banner}
            logoURL={project.logo}
            title={project.title}
            salePeriod={project.salePeriod}
            totalPrice={project.totalPrice}
            allocation={project.allocation}
            status={project.status}
          />
        ))}
      </div>
    </div>
  )
}

export default Index
