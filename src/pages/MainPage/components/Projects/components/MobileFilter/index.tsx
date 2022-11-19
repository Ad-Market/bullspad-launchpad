import "./index.scss"
import FilterButton from "../FilterButton"

interface MobileFilterProps {
  onClick: () => void
  checked: boolean
}

const MobileFilter = ({ onClick, checked }: MobileFilterProps) => {
  return (
    <div
      className="mobile-filter"
      onClick={onClick}
    >
      <div className="button">
        Filter
        <FilterButton checked={checked} />
      </div>
    </div>
  )
}

export default MobileFilter
