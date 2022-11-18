import { useEffect, useState } from "react"
import { useSearchParams } from "react-router-dom"

export const statusFilterParam = "status"

export enum StatusFilterType {
  all = "all",
  open = "open",
  upcoming = "upcoming",
  ended = "ended",
}

type StatusFilterProps = {
  activeFilter: StatusFilterType
  setALlFilter: () => void
  setOpenFilter: () => void
  setUpcomingFilter: () => void
  setEndedFilter: () => void
}

export default function useStatusFilter(): StatusFilterProps {
  const [search, setSearch] = useSearchParams()
  const [activeFilter, setActiveFilter] = useState(StatusFilterType.all)

  const setALlFilter = () => {
    search.set(statusFilterParam, StatusFilterType.all)
    setSearch(search, { replace: true })
  }

  const setOpenFilter = () => {
    search.set(statusFilterParam, StatusFilterType.open)
    setSearch(search, { replace: true })
  }

  const setUpcomingFilter = () => {
    search.set(statusFilterParam, StatusFilterType.upcoming)
    setSearch(search, { replace: true })
  }

  const setEndedFilter = () => {
    search.set(statusFilterParam, StatusFilterType.ended)
    setSearch(search, { replace: true })
  }

  useEffect(() => {
    if (search.has(statusFilterParam)) {
      setActiveFilter(search.get(statusFilterParam) as StatusFilterType)
    }
  }, [search, activeFilter])

  return {
    activeFilter,
    setALlFilter,
    setOpenFilter,
    setUpcomingFilter,
    setEndedFilter,
  }
}
