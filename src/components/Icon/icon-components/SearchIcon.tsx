import Icon, { TIconProps } from "../Icon"

const SearchIcon = (props: TIconProps) => {
  return (
    <Icon iconName="search-icon" { ...props }>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="9.5"
          cy="9.5"
          r="7.5"
          stroke="#7281BC"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <line
          x1="15.8786"
          y1="15.4645"
          x2="21.5354"
          y2="21.1213"
          stroke="#7281BC"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    </Icon>
  )
}

export default SearchIcon
