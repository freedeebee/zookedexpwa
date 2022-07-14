import React from "react";
import { GoLocation } from "react-icons/go";
import { BiTimeFive } from "react-icons/bi";
import styled from "styled-components";
import { AnimalHeaderProps } from "./types";

const InformationHeader = (props: AnimalHeaderProps) => {
  return (
    <Container>
      <Name>
        <p>{props.animalName}</p>
      </Name>
      <IconData>
        <Icon>
          <GoLocation />
        </Icon>
        <p>{props.location}</p>
      </IconData>
      <IconData>
        <Icon>
          <BiTimeFive />
        </Icon>
        <p>{props.date}</p>
      </IconData>
    </Container>
  );
};

export default InformationHeader;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  background: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.black};
`;

const Name = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const IconData = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 1vh;
`;
const Icon = styled.div`
  color: ${({ theme }) => theme.colors.black};
  margin-right: 8px;
`;
