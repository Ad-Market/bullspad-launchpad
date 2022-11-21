import "./index.scss"
import { ZOMBO_DUCkS_IMG, ZOMBO_LOGO } from "../../../../theme/sources"
import { Button, StatusIndicator } from "../../../../components"
import useMobile from "../../../../hooks/useMobile"


const Card = () => {
  const { mobile } = useMobile()

  return (
    <div className="card-container">
      <img
        src={ZOMBO_DUCkS_IMG}
        alt=""
        className="project-banner"
      />
      <StatusIndicator status={"Open"} />
      <div className="card-content">
        <div className="content-header">
          <img
            src={ZOMBO_LOGO}
            alt=""
            className="project-logo"
          />
          <div className="sale-end">
            Sale ends in 4d 2h 8m 2s
          </div>
        </div>
        <div className="progress-bar">
          <div className="progress" />
        </div>
        <div className="progress-description">
          40% of the minimum goal raised
        </div>
        <div className="subheader">
          Public total price
        </div>
        <div className="amount">
          87243 NEAR
        </div>
        <div className="subheader">
          Max allocation
        </div>
        <div className="amount">
          9283 NEAR
        </div>
        <div className="token-rate">
          1 duck = 0.09382 NEAR
        </div>
        {!mobile && (
          <Button
            size="large"
            color="green"
            onClick={() => {}}
          >
            Deposit
          </Button>
        )}
      </div>
    </div>
  )
}

export default Card
