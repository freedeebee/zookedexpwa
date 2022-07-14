import axios from "axios";
import { useState, useEffect } from "react";
import styled from "styled-components";
import ShopCard from "../../components/ShopCard/ShopCard";
import ShopList from "../../components/ShopCard/ShopList";
import { ShopCardProps } from "../../components/ShopCard/types";

const ShopPage = () => {
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
          key={`shopItem-${item.id}`}
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

export default ShopPage;

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
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
