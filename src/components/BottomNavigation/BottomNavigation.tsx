import BottomNavigationItem from "./BottomNavigationItem/BottomNavigationItem";
import { BottomNavWrapper } from "./styles";
import { MdPets } from "react-icons/md";
import { FaMapMarkedAlt, FaShoppingCart } from "react-icons/fa";
import { AiFillHome } from "react-icons/ai";
import CameraButton from "../CameraButton/CameraButton";
import { Spacer } from "../Containers/Spacer";
import { useEffect, useState } from "react";

function BottomNavigation() {
  return (
    <BottomNavWrapper>
      <CameraButton />
      <BottomNavigationItem label='Home' icon={<AiFillHome />} link='/' />
      <BottomNavigationItem label='Map' icon={<FaMapMarkedAlt />} link='/map' />
      <Spacer />
      <BottomNavigationItem
        label='Shop'
        icon={<FaShoppingCart />}
        link='/shop'
      />
      <BottomNavigationItem label='Profile' icon={<MdPets />} link='/profile' />
    </BottomNavWrapper>
  );
}

export default BottomNavigation;
