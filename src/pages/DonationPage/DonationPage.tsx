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
      <img src='https://picsum.photos/id/1025/300/200'></img>
      <DonationForm />
    </Container>
  );
};

export default DonationPage;

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: center;
`;
