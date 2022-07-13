import { NavLink } from "react-router-dom"
import { NavButton, NavItemLabel } from "./styles"
import { BottomNavigationItemProps } from "./types"

function BottomNavigationItem(props: BottomNavigationItemProps) {
    return (
        <NavLink to={props.link}>
            <NavButton>
                <div>{props.icon}</div>
                <NavItemLabel>{props.label}</NavItemLabel>
            </NavButton>
        </NavLink>
    )
}

export default BottomNavigationItem