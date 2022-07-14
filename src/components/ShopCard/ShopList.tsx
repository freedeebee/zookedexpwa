import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import ShopCard from "./ShopCard";
import { ShopCardProps } from "./types";

const ShopList = () => {
  const [cardData, setCardData] = useState([]);

  useEffect(() => {
    axios
      .get("/shopList.json")
      .then((res) => {
        setCardData(res.data.shopItems);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <Container>
      {cardData.map((item: ShopCardProps) => (
        <ShopCard
          id={item.id}
          name={item.name}
          price={item.price}
          imageSrc={item.imageSrc}
          previewText={item.previewText}
        />
      ))}
    </Container>
  );
};

export default ShopList;

const Container = styled.div`
  position: absolute;
  top: -10px;
  padding: 4vh 16px 20px 16px;
  height: 88vh;
  width: 100vw;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    width: 8px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    border-radius: 10px;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.secondary};
    border-radius: 10px;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: ${({ theme }) => theme.colors.secondary};
  }
`;
