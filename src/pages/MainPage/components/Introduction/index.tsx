import "./index.scss"
import { Button, SearchBar } from "../../../../components"
import { INTRODUCTION_BULL, INTRODUCTION_BULL_MOBILE } from "../../../../theme/sources"
import useMobile from "../../../../hooks/useMobile"

const Introduction = () => {
  const { mobile } = useMobile()

  return (
    <div className="introduction">
      {mobile && <SearchBar />}
      <div className="page-header">
        Invest in crypto projects at bullspad
      </div>
      <div className="page-content">
        <div className="text">
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
      </div>
      <img
        src={mobile ? INTRODUCTION_BULL_MOBILE : INTRODUCTION_BULL}
        alt=""
        className="introduction-bull"
      />
    </div>
  )
}

export default Introduction
