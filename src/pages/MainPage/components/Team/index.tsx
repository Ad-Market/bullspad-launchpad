import "./index.scss"
import { TEAM_BULL } from "../../../../theme/sources"

const Team = () => {
  return (
    <div className="team">
      <div className="page-header">
        Bullspad team
      </div>
      <div className="page-content">
        BullsPad is a new IDO platform powered by NEAR Protocol.<br />
        Our main goal is to make it convenient to use so we are focused<br />
        on composability and better experience for users. Easy to use<br />
        platform gives you an opportunity to earn and stake $BULL token<br />
        and get $NEAR rewards by participating in IDOs.
      </div>
      <img
        src={TEAM_BULL}
        alt=""
        className="team-bull"
      />
    </div>
  )
}

export default Team
