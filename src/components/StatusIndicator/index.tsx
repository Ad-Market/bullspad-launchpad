import { classNames } from "@knownout/lib"
import "./index.scss"

interface StatusIndicatorProps {
  status: string
}

const StatusIndicator = ({ status }: StatusIndicatorProps) => {
  return (
    <div className="status">
      {status}
      {status !== "Ended" && (
        <div
          className={classNames(
            "indicator",
            status === "Open" && "open",
            status === "Upcoming" && "upcoming",
          )}
        />
      )}
    </div>
  )
}

export default StatusIndicator
