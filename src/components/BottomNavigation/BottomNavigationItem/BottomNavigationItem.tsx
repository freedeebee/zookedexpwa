import { NavButton, NavItemLabel } from "./styles"
import { BottomNavigationItemProps } from "./types"

function BottomNavigationItem(props: BottomNavigationItemProps) {
    return (
        <NavButton>
            <div>{props.icon}</div>
            <NavItemLabel>{props.label}</NavItemLabel>
        </NavButton>
    )
}

export default BottomNavigationItem