import React from "react";
import styled from "styled-components";
import DonationForm from "../../components/Donation/DonationForm";
import BackButton from "../../components/Donation/BackButton";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

const DonationPage = () => {
  const { id } = useParams();

  return (
    <Container>
      <BackButton />
      <AnimalImage src='https://picsum.photos/id/1025/300/200'></AnimalImage>
      <DonationForm />
    </Container>
  );
};

export default DonationPage;

export const AnimalImage = styled.img`
  object-fit: cover;
  width: 100%;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: center;
`;
