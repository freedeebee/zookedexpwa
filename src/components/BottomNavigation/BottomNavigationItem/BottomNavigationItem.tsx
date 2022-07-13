import { NavButton } from "./styles"
import { BottomNavigationItemProps } from "./types"

function BottomNavigationItem(props: BottomNavigationItemProps) {
    return (
        <NavButton>
            <div>{props.icon}</div>
            <div>{props.label}</div>
        </NavButton>
    )
}

export default BottomNavigationItem