import BottomNavigationItem from "./BottomNavigationItem/BottomNavigationItem"
import { BottomNavWrapper } from "./styles"
import { MdPets } from 'react-icons/md'
import { FaMapMarkedAlt, FaShoppingCart } from 'react-icons/fa'
import { AiFillHome } from 'react-icons/ai'

function BottomNavigation() {
    return (
        <BottomNavWrapper>
            <BottomNavigationItem 
                label="Home"
                icon={<AiFillHome />}
                link="/" />
            <BottomNavigationItem 
                label="Map"
                icon={<FaMapMarkedAlt />}
                link="/" />
            <BottomNavigationItem 
                label="Shop"
                icon={<FaShoppingCart />}
                link="/" />
            <BottomNavigationItem 
                label="Profile"
                icon={<MdPets />}
                link="/" />
        </BottomNavWrapper>
    )
}

export default BottomNavigation