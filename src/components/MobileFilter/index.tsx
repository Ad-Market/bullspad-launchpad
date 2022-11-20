import "./index.scss"

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
        <div
          className="filter-button"
        >
          <input
            id="checkbox"
            className="filter-button__cheeckbox"
            type="checkbox"
            checked={checked}
          />
          <div>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MobileFilter
