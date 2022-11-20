import "./index.scss"
import { Button } from "../index"
import useStatusFilter, { StatusFilterType } from "../../hooks/useStatusFilter"
import useMobile from "../../hooks/useMobile"

const StatusFilter = () => {
  const { mobile } = useMobile()
  const {
    activeFilter,
    setALlFilter,
    setOpenFilter,
    setUpcomingFilter,
    setEndedFilter,
  } = useStatusFilter()


  return (
    <div className="status-filter">
      Status
      <div className="actions">
        <Button
          size={mobile ? "large" : "small"}
          color={
            activeFilter === StatusFilterType.all
              ? "white"
              : "black-n-white"
          }
          onClick={setALlFilter}
        >
          All
        </Button>
        <Button
          size={mobile ? "large" : "small"}
          color={
            activeFilter === StatusFilterType.open
              ? "white"
              : "black-n-white"
          }
          onClick={setOpenFilter}
        >
          Open
          <div className="status-indicator green" />
        </Button>
        <Button
          size={mobile ? "large" : "small"}
          color={
            activeFilter === StatusFilterType.upcoming
              ? "white"
              : "black-n-white"
          }
          onClick={setUpcomingFilter}
        >
          Upcoming
          <div className="status-indicator blue" />
        </Button>
        <Button
          size={mobile ? "large" : "small"}
          color={
            activeFilter === StatusFilterType.ended
              ? "white"
              : "black-n-white"
          }
          onClick={setEndedFilter}
        >
          Ended
        </Button>
      </div>
    </div>
  )
}

export default StatusFilter
