import BottomNavigationItem from "./BottomNavigationItem/BottomNavigationItem";
import { BottomNavWrapper } from "./styles";
import { MdPets } from "react-icons/md";
import { FaMapMarkedAlt, FaShoppingCart } from "react-icons/fa";
import { AiFillHome } from "react-icons/ai";
import CameraButton from "../CameraButton/CameraButton";
import { Spacer } from "../Containers/Spacer";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

function BottomNavigation() {
  const [activeNav, setActiveNav] = useState("Home");

  const location = useLocation();
  console.log(location);

  useEffect(() => {}, [activeNav]);
  return (
    <BottomNavWrapper>
      <CameraButton />
      <BottomNavigationItem
        label="Home"
        icon={<AiFillHome />}
        link="/"
        active={location.pathname === "/" ? true : false}
        onClick={() => setActiveNav("Home")}
      />
      <BottomNavigationItem
        label="Map"
        icon={<FaMapMarkedAlt />}
        link="/map"
        active={location.pathname === "/map" ? true : false}
        onClick={() => setActiveNav("Map")}
      />
      <Spacer />
      <BottomNavigationItem
        label="Shop"
        icon={<FaShoppingCart />}
        link="/shop"
        active={location.pathname === "/shop" ? true : false}
        onClick={() => setActiveNav("Shop")}
      />
      <BottomNavigationItem
        label="Profile"
        icon={<MdPets />}
        link="/profile"
        active={location.pathname === "/profile" ? true : false}
        onClick={() => setActiveNav("Profile")}
      />
    </BottomNavWrapper>
  );
}

export default BottomNavigation;
