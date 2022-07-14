import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Card from "../components/Card/Card";
import icon from "../assets/images/512Zookedex.png";

type AnimalCardProps = {
  id: number;
  name: string;
  src: string;
  date: Date;
  location: string;
  views: number;
};

function Homepage() {
  const [cardData, setCardData] = useState([]);

  useEffect(() => {
    axios
      .get("/animalCards.json")
      .then((res) => setCardData(res.data.animalcards))
      .catch((err) => console.error(err));
  }, []);

  return (
    <Container>
      <IMG src={icon} />
      <Header>
        <h1>Zookedex</h1>
      </Header>
      <h3>Your recent findings</h3>
      {cardData.map((item: AnimalCardProps) => (
        <Card
          key={item.id}
          id={item.id}
          name={item.name}
          date={new Date(item.date)}
          src={item.src}
          location={item.location}
          views={item.views}
        />
      ))}
    </Container>
  );
}

export default Homepage;

const Header = styled.div`
  display: flex;
`;

const IMG = styled.img`
  width: 100px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: -10px;
  padding: 4vh 16px 20px 16px;
  height: 88vh;
  width: 100vw;
  overflow-y: scroll;
  overflow-x: hidden;
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
