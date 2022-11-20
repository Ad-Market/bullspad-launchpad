import "./index.scss"
import { DiscordIcon, TelegramIcon, TwitterIcon } from "../../../../components/Icon"
import useMobile from "../../../../hooks/useMobile"
import { Button } from "../../../../components"

const ProjectDetails = () => {
  const { mobile } = useMobile()

  return (
    <div className="details">
      <div className="details-header">
        About
      </div>
      <div className="details-description">
        Zombo Duck PvP Fighter is an online game based on NFT digital art.
        This project is presented by the Zombo Ducks team.
        This means that it is done qualitatively, logically and, most importantly, profitably.
        <p>
          Game mechanics: it's PvP fights.
          The fighting consists of 5 rounds 10 seconds each.
          You can make three moves in each round. In order to win, bring your opponent's health to 0.
        </p>
      </div>
      <div className="details-header">
        Timeline
      </div>
      <div className="timeline">
        <div className="timeline-bar">
          <div className="whitelist-indicator" />
          <div className="sale-indicator" />
          <div className="end-indicator" />
        </div>
        <div className="timeline-description">
          <div className="item">
            <div className="title">
              Start of whitelist
            </div>
            <div className="date">
              00/00/00
            </div>
          </div>
          <div className="item">
            <div className="title">
              Start of sale
            </div>
            <div className="date">
              00/00/00
            </div>
          </div>
          <div className="item">
            <div className="title">
              End of sale
            </div>
            <div className="date">
              00/00/00
            </div>
          </div>
        </div>
      </div>
      <div className="details-header">
        Highlights
      </div>
      <div className="details-description">
        Smth about project. Zombo Ducks ....Smth about project. Zombo Ducks ....Smth about project.
        Zombo Ducks ....Smth about project. Zombo Ducks ....Smth about project. Zombo Ducks ....
      </div>
      <div className="details-header">
        Social media
      </div>
      <div className="social-media-icons">
        <TwitterIcon />
        <TelegramIcon />
        <DiscordIcon />
      </div>
      <div className="details-header">
        Website
      </div>
      <a
        href="https://ZomboDucks.com"
        target="_blank"
        rel="noreferrer"
        className="website"
      >
        ZomboDucks.com
      </a>
      {mobile && (
        <Button
          size="large"
          color="green"
          onClick={() => {}}
        >
          Deposit
        </Button>
      )}
    </div>
  )
}

export default ProjectDetails
