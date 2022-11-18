import "./index.scss"
import { TEAM_BULL, TEAM_BULL_MOBILE } from "../../../../theme/sources"
import useMobile from "../../../../hooks/useMobile"

const Team = () => {
  const { mobile } = useMobile()

  return (
    <div className="team">
      <div className="page-header">
        Bullspad team
      </div>
      {mobile ? (
        <div className="page-content">
          BullsPad is a new IDO platform powered by NEAR Protocol. Our main goal is
          to make it convenient to use so we are focused on composability and
          better experience for users. Easy to use platform gives you an opportunity to earn
          and stake $BULL token and get $NEAR rewards by participating in IDOs.
        </div>
      ) : (
        <div className="page-content">
          BullsPad is a new IDO platform powered by NEAR Protocol.<br />
          Our main goal is to make it convenient to use so we are focused<br />
          on composability and better experience for users. Easy to use<br />
          platform gives you an opportunity to earn and stake $BULL token<br />
          and get $NEAR rewards by participating in IDOs.
        </div>
      )
      }
      <img
        src={mobile ? TEAM_BULL_MOBILE : TEAM_BULL}
        alt=""
        className="team-bull"
      />
    </div>
  )
}

export default Team
