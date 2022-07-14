import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleUsernameChange = (value: string) => {
    setUsername(value);
  };

  const handlePasswordChange = (value: string) => {
    setPassword(value);
  };

  return (
    <GreenBlock>
      <Form>
        <Label>Username</Label>
        <Input
          type="text"
          placeholder="Enter Username"
          name="username"
          required
          value={username}
          onChange={(event) => handleUsernameChange(event.target.value)}
        />
        <Label>Password</Label>
        <Input
          type="password"
          placeholder="Enter Password"
          name="password"
          required
          value={password}
          onChange={(event) => handlePasswordChange(event.target.value)}
        />
      </Form>
      <Button type="submit" onClick={() => navigate("/")}>
        Sign in
      </Button>
    </GreenBlock>
  );
};

export default LoginForm;

const GreenBlock = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100vw;
  top: 99px;
  height: 75vh;
  background-color: #61892f;
  align-items: center;
  overflow-y: hidden;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 10vw;
  width: 100%;
`;

const Input = styled.input`
  background-color: transparent;
  border: none;
  border-bottom: 4px solid ${({ theme }) => theme.colors.black};
  margin-bottom: 40px;
  &:focus {
    outline: none;
    border-bottom: 4px solid ${({ theme }) => theme.colors.secondary};
  }

  ::placeholder {
    /* Chrome, Firefox, Opera, Safari 10.1+ */
    color: ${({ theme }) => theme.colors.black};
    opacity: 1; /* Firefox */

    &:focus {
      outline: none;
      border-bottom: 4px solid ${({ theme }) => theme.colors.secondary};
    }
  }

  :-ms-input-placeholder {
    /* Internet Explorer 10-11 */
    color: ${({ theme }) => theme.colors.black};
  }

  ::-ms-input-placeholder {
    /* Microsoft Edge */
    color: ${({ theme }) => theme.colors.black};
  }
`;

const Label = styled.label`
  margin-bottom: 20px;
  color: ${({ theme }) => theme.colors.black};
`;

const Button = styled.button`
  border-radius: 100px;
  height: 80px;
  width: 80px;
  border: none;
  box-shadow: 4px 4px rgba(0, 0, 0, 0.2);
  background: rgb(134, 194, 50);
  background: radial-gradient(
    circle,
    rgba(134, 194, 50, 1) 0%,
    rgba(97, 137, 47, 1) 100%
  );
`;
