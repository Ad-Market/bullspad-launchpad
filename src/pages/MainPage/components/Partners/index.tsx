import "./index.scss"
import { PARTNER_FEW_AND_FAR, PARTNER_NEAR } from "../../../../theme/sources"
import { Button } from "../../../../components"
import useMobile from "../../../../hooks/useMobile"

const Partners = () => {
  const { mobile } = useMobile()

  return (
    <div className="partners">
      <div className="partners-header">
        Our partners
      </div>
      <div className="partners-cards">
        <div className="partners-card">
          <img
            src={PARTNER_NEAR}
            alt=""
            width={mobile ? "136px" : "208px"}
            height={mobile ? "34px" : "55px"}
          />
          <Button
            size={mobile ? "large" : "medium"}
            color="black-n-green"
            onClick={() => {}}
          >
            Website
          </Button>
        </div>
        <div className="partners-card">
          <img
            src={PARTNER_FEW_AND_FAR}
            alt=""
            width={mobile ? "224px" : "312px"}
            height={mobile ? "38px" : "52px"}
          />
          <Button
            size={mobile ? "large" : "medium"}
            color="black-n-green"
            onClick={() => {}}
          >
            Website
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Partners
