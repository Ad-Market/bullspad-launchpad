import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination } from "swiper"
import { classNames } from "@knownout/lib"

import "./index.scss"
import {
  Button,
  MobileFilter,
  NavigationButton,
  ProjectCard,
  StatusFilter
} from "../../../../components"
import { DUMMY_PROJECTS } from "../../../../theme/sources"
import useMobile from "../../../../hooks/useMobile"


const Projects = () => {
  const [prevBtnVisible, setPrevBtnVisible] = useState(false)
  const [nextBtnVisible, setNextBtnVisible] = useState(true)
  const [filterVisible, setFilterVisible] = useState(false)
  const navigate = useNavigate()
  const { mobile } = useMobile()

  return (
    <div className="projects-section">
      <div
        className={classNames(
          "section-header",
          filterVisible && "visible"
        )}
      >
        Projects
        {mobile && (
          <MobileFilter
            onClick={() => setFilterVisible(!filterVisible)}
            checked={filterVisible}
          />
        )}
        <StatusFilter />
      </div>
      <Swiper
        freeMode={true}
        slidesPerView={mobile ? 1 : 3}
        slidesPerGroup={1}
        spaceBetween={32}
        onActiveIndexChange={(data) => {
          if (mobile) {
            if (data.activeIndex === 0) {
              setPrevBtnVisible(false)
            } else {
              setPrevBtnVisible(true)
            }
            if (data.activeIndex === DUMMY_PROJECTS.length - 1) {
              setNextBtnVisible(false)
            } else {
              setNextBtnVisible(true)
            }
          } else {
            if (data.activeIndex === 0) {
              setNextBtnVisible(true)
            } else {
              setNextBtnVisible(false)
            }
            if (data.activeIndex === DUMMY_PROJECTS.length - 3) {
              setPrevBtnVisible(true)
            } else {
              setPrevBtnVisible(false)
            }
          }
        }}
        navigation={{
          prevEl: ".prevElBtn",
          nextEl: ".nextElBtn",
        }}
        modules={[Pagination, Navigation]}
      >
        {DUMMY_PROJECTS.map((project) => (
          <SwiperSlide key={project.title}>
            <ProjectCard
              bannerURL={project.banner}
              logoURL={project.logo}
              title={project.title}
              salePeriod={project.salePeriod}
              totalPrice={project.totalPrice}
              allocation={project.allocation}
              status={project.status}
            />
          </SwiperSlide>
        ))}
        <NavigationButton
          className={classNames(
            "prevElBtn",
            prevBtnVisible && "visible",
          )}
        />
        <NavigationButton
          className={classNames(
            "nextElBtn",
            nextBtnVisible && "visible",
          )}
        />
      </Swiper>
      <Button
        size="large"
        color="green"
        onClick={() => navigate("/projects")}
      >
        Discover all projects
      </Button>
    </div>
  )
}

export default Projects
