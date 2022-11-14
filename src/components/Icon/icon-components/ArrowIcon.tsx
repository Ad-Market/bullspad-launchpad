import Icon, { TIconProps } from "../Icon"

const ArrowIcon = (props: TIconProps) => {
  return (
    <Icon iconName="arrow-icon" { ...props }>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M8 6H18V16M18 6L6 18L18 6Z"
          stroke="#7281BC"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </Icon>
  )
}

export default ArrowIcon
