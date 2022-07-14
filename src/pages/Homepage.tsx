import React from "react";
import styled from "styled-components";
import ListView from "../components/Listview/ListView";

const Homepage = () => {
  return (
    <Container>
      <ListView />
    </Container>
  );
};

export default Homepage;

const Container = styled.div`
  display: flex;
  justify-content: center;
`;
