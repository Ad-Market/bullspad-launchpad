import { useNavigate } from "react-router-dom"
import "./index.scss"

import { StatusIndicator } from "../index"

interface ProjectCardProps {
  bannerURL: string
  logoURL: string
  title: string
  salePeriod: string
  totalPrice: string
  allocation: string
  status: string
}

const ProjectCard = ({
  bannerURL,
  logoURL,
  title,
  salePeriod,
  totalPrice,
  allocation,
  status,
}: ProjectCardProps) => {
  const navigate = useNavigate()
  const projectLink = title.toLowerCase().replace(/\s/g,"_")

  return (
    <div
      className="card"
      onClick={() => navigate(`/projects/${projectLink}`)}
    >
      <StatusIndicator status={status} />
      <img
        src={bannerURL}
        alt=""
        className="banner"
      />
      <div className="card-content">
        <div className="card-title">
          <img
            src={logoURL}
            alt=""
            className="logo"
          />
          {title}
        </div>
        {/*{TODO: доработать по готовности бэка} */}
        <div className="sale-end">
          {salePeriod}
        </div>
        <div className="public-price">
          Public total price
        </div>
        <div className="amount">
          {`${totalPrice} NEAR`}
        </div>
        <div className="allocation">
          Allocation
        </div>
        <div className="amount">
          {`${allocation} NEAR`}
        </div>
        <div className="bull-rate">
          1 BULL = 0.09382 NEAR
        </div>
      </div>
    </div>
  )
}

export default ProjectCard
