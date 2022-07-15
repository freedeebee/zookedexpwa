import axios from "axios";
import { useState, useEffect } from "react";
import styled from "styled-components";
import ShopCard from "../../components/ShopCard/ShopCard";
import { ShopCardProps } from "../../components/ShopCard/types";
import { GiTwoCoins } from "react-icons/gi";

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
      <HeaderWrapper>Shop</HeaderWrapper>
      <ItemContainer>
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
      </ItemContainer>
    </Container>
  );
};

export default ShopPage;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 90vh;
  top: -10px;
  padding: 4vh 16px 20px 16px;
`;

const HeaderWrapper = styled.h1`
  line-height: 100%;
  padding-bottom: 15px;
`;

const CoinIcon = styled(GiTwoCoins)`
  width: 5em;
  height: 5em;
`;

const ItemContainer = styled.div`
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
