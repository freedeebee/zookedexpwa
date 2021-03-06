import React from "react";
import styled from "styled-components";
import LoginForm from "../../components/Login/LoginForm";

const LoginPage = () => {
  return (
    <Container>
      <h2>Login</h2>
      <Waves xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#61892F"
          fill-opacity="1"
          d="M0,256L21.8,224C43.6,192,87,128,131,128C174.5,128,218,192,262,213.3C305.5,235,349,213,393,181.3C436.4,149,480,107,524,74.7C567.3,43,611,21,655,53.3C698.2,85,742,171,785,202.7C829.1,235,873,213,916,192C960,171,1004,149,1047,170.7C1090.9,192,1135,256,1178,288C1221.8,320,1265,320,1309,288C1352.7,256,1396,192,1418,160L1440,128L1440,320L1418.2,320C1396.4,320,1353,320,1309,320C1265.5,320,1222,320,1178,320C1134.5,320,1091,320,1047,320C1003.6,320,960,320,916,320C872.7,320,829,320,785,320C741.8,320,698,320,655,320C610.9,320,567,320,524,320C480,320,436,320,393,320C349.1,320,305,320,262,320C218.2,320,175,320,131,320C87.3,320,44,320,22,320L0,320Z"
        ></path>
      </Waves>
      <LoginForm />
    </Container>
  );
};

export default LoginPage;

const Waves = styled.svg`
  display: block;
  position: relative;
  top: 100px;
  overflow: hidden;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
`;
