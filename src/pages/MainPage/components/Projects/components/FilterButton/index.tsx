import "./index.scss"

interface FilterButtonProps {
  checked: boolean
}

const FilterButton = ({ checked }: FilterButtonProps) => {
  return (
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
  )
}

export default FilterButton
