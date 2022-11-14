import "./index.scss"
import { Button } from "../../../../components"
import { INTRODUCTION_BULL } from "../../../../theme/sources"

const Introduction = () => {
  return (
    <div className="introduction">
      <div className="page-header">
        Invest in crypto projects at bullspad
      </div>
      <div className="page-content">
        Welcome to the BullsDao IDO Launchpad! It is a place where you can find a project to get in love with.
        At the same time, it is a perfect place for numerous projects to start their path and build something big.
      </div>
      <div className="actions">
        <Button
          size="large"
          color="green"
          onClick={() => {}}
        >
          Become an investor
        </Button>
        <Button
          size="large"
          color="black-n-green"
          onClick={() => {}}
        >
          Apply for IDO
        </Button>
      </div>
      <img
        src={INTRODUCTION_BULL}
        alt=""
        className="introduction-bull"
      />
    </div>
  )
}

export default Introduction
