import React from "react";
import styled from "styled-components";
import DonationForm from "../../components/Donation/DonationForm";

const DonationPage = () => {
  return (
    <Container>
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
