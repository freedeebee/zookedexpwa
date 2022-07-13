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
                link="/map" />
            <BottomNavigationItem 
                label="Shop"
                icon={<FaShoppingCart />}
                link="/shop" />
            <BottomNavigationItem 
                label="Profile"
                icon={<MdPets />}
                link="/profile" />
        </BottomNavWrapper>
    )
}

export default BottomNavigation