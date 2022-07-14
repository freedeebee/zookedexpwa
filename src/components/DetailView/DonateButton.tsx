import React, { useState } from "react";
import { BiDonateHeart } from "react-icons/bi";
import styled from "styled-components";

const DonateButton = () => {
  const handleClick = () => {
    console.log("Donated");
  };
  return <Button onClick={() => handleClick()} />;
};

export default DonateButton;

const Button = styled(BiDonateHeart)`
  background-color: ${({ theme }) => theme.colors.secondary};
  color: white;
  position: absolute;
  padding: 8px;
  top: 170px;
  right: 20px;
  height: 64px;
  width: 64px;
  border-radius: 20px;
`;
