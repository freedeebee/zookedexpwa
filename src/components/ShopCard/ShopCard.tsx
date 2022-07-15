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

      <TextWrapper>
        <p>{props.previewText}</p>
      </TextWrapper>
    </Container>
  );
};

export default ShopCard;

const Container = styled.div`
  display: flex;
  width: 270px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin-bottom: 20px;
  margin-right: 20px;
  background-color: ${({ theme }) => theme.colors.lightGrey};
  border-radius: 10px 10px 0px 0;
`;

const TextWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.black};
  height: 3em;
  width: inherit;
  border-radius: 0 0 10px 10px;
`;

const Image = styled.img`
  border: 1px solid ${({ theme }) => theme.colors.secondary};
  height: 140px;
  width: inherit;
  display: block;
  object-fit: contain;
  border-radius: 10px 10px 0px 0;
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
