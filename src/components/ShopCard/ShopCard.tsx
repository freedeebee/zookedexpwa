import React from "react";
import styled from "styled-components";
import { ShopCardProps } from "./types";

const ShopCard = (props: ShopCardProps) => {
  return (
    <Container>
      <ImageWrapper>
        <Name className='card--title'>{props.name}</Name>
        <Points>{props.price}</Points>
        <Image src={props.imageSrc} />
      </ImageWrapper>

      <p>{props.previewText}</p>
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
`;

const Image = styled.img`
  height: 200px;
  width: 200px;
  display: block;
  object-fit: cover;
`;

const Name = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 2em;
  background-color: ${({ theme }) => theme.colors.secondary};
  padding: 4px 12px;
  color: ${({ theme }) => theme.colors.black};
  border-radius: 10px 0 10px 0;
`;

const Points = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  height: 2em;
  background-color: ${({ theme }) => theme.colors.secondary};
  padding: 4px 12px;
  color: ${({ theme }) => theme.colors.black};
  border-radius: 0 10px 0 10px;
`;

export const ImageWrapper = styled.div`
  object-fit: fill;
  position: relative;
  display: flex;
  width: 100%;

  &:before {
    background: rgba(0, 255, 255, 0.5);
  }
`;
