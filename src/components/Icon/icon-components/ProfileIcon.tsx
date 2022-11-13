import Icon, { TIconProps } from "../Icon"

const ProfileIcon = (props: TIconProps) => {
  return (
    <Icon iconName="profile-icon" { ...props }>
      <svg
        width="20"
        height="23"
        viewBox="0 0 20 23"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* eslint-disable-next-line max-len */}
        <path d="M10 11.5C12.8406 11.5 15.1429 9.1498 15.1429 6.25C15.1429 3.3502 12.8406 1 10 1C7.15938 1 4.85714 3.3502 4.85714 6.25C4.85714 9.1498 7.15938 11.5 10 11.5ZM13.6 12.8125H12.929C12.0371 13.2309 11.0446 13.4688 10 13.4688C8.95536 13.4688 7.96696 13.2309 7.07098 12.8125H6.4C3.41875 12.8125 1 15.2816 1 18.325V20.0312C1 21.1182 1.86384 22 2.92857 22H17.0714C18.1362 22 19 21.1182 19 20.0312V18.325C19 15.2816 16.5813 12.8125 13.6 12.8125Z" stroke="#FBFBFF"/>
      </svg>
    </Icon>
  )
}

export default ProfileIcon
