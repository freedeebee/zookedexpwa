import BottomNavigationItem from "./BottomNavigationItem/BottomNavigationItem"
import { BottomNavWrapper } from "./styles"
import {MdPets} from 'react-icons/md'


function BottomNavigation() {
    return (
        <BottomNavWrapper>
            <BottomNavigationItem 
                label="Home"
                icon={<MdPets />}
                link="/" />
            <BottomNavigationItem 
                label="Map"
                icon={<MdPets />}
                link="/" />
            <BottomNavigationItem 
                label="Shop"
                icon={<MdPets />}
                link="/" />
            <BottomNavigationItem 
                label="Profile"
                icon={<MdPets />}
                link="/" />
        </BottomNavWrapper>
    )
}

export default BottomNavigation