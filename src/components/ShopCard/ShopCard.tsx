import React from "react";
import styled from "styled-components";
import { ShopCardProps } from "./types";

const ShopCard = (props: ShopCardProps) => {
  return (
    <Container>
      <Image src={props.imageSrc} />
      <p>{props.id}</p>
    </Container>
  );
};

export default ShopCard;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin: 20px;
`;

const Image = styled.img`
  height: 100px;
  width: 100px;
  display: block;
  object-fit: cover;
`;
