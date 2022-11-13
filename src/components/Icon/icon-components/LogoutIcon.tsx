import Icon, { TIconProps } from "../Icon"

const LogoutIcon = (props: TIconProps) => {
  return (
    <Icon iconName="logout-icon" { ...props }>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M5 7V4C5 2.89543 5.89543 2 7 2H19C20.1046 2 21 2.89543 21 4V20C21 21.1046 20.1046 22 19 22H7C5.89543 22 5 21.1046 5 20V17"
          stroke="#7281BC"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        <path
          d="M9.2498 6.17851L15.1424 12.0711L9.2498 17.9636M15.1424 12.0711H1.00022H15.1424Z"
          stroke="#7281BC"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </Icon>
  )
}

export default LogoutIcon
