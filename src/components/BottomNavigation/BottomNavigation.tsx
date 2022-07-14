import BottomNavigationItem from "./BottomNavigationItem/BottomNavigationItem";
import { BottomNavWrapper } from "./styles";
import { MdPets } from "react-icons/md";
import { FaMapMarkedAlt, FaShoppingCart } from "react-icons/fa";
import { AiFillHome } from "react-icons/ai";
import CameraButton from "../CameraButton/CameraButton";
import { Spacer } from "../Containers/Spacer";
import { useEffect, useState } from "react";

function BottomNavigation() {
  const [activeNav, setActiveNav] = useState("Home");

  useEffect(() => {}, [activeNav]);
  return (
    <BottomNavWrapper>
      <CameraButton />
      <BottomNavigationItem
        label="Home"
        icon={<AiFillHome />}
        link="/"
        active={activeNav === "Home" ? true : false}
        onClick={() => setActiveNav("Home")}
      />
      <BottomNavigationItem
        label="Map"
        icon={<FaMapMarkedAlt />}
        link="/map"
        active={activeNav === "Map" ? true : false}
        onClick={() => setActiveNav("Map")}
      />
      <Spacer />
      <BottomNavigationItem
        label="Shop"
        icon={<FaShoppingCart />}
        link="/shop"
        active={activeNav === "Shop" ? true : false}
        onClick={() => setActiveNav("Shop")}
      />
      <BottomNavigationItem
        label="Profile"
        icon={<MdPets />}
        link="/profile"
        active={activeNav === "Profile" ? true : false}
        onClick={() => setActiveNav("Profile")}
      />
    </BottomNavWrapper>
  );
}

export default BottomNavigation;
