import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { GiPiggyBank } from "react-icons/gi";
import { BiDonateHeart } from "react-icons/bi";

const DonationForm = () => {
  const [donation, setDonation] = useState("");

  const navigate = useNavigate();

  const handleDonationChange = (value: string) => {
    setDonation(value);
  };

  const [select, setSelect] = useState("betterPriceOnly");
  const handleSelectChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSelect(value);
  };

  return (
    <GreenBlock>
      <Container>
        <Label>
          <NewIcon />
          Donate now
        </Label>
      </Container>
      <Form>
        <ButtonContainer>
          <AmountButton type='submit' onClick={() => navigate("/")}>
            10€{" "}
          </AmountButton>
          <AmountButton type='submit' onClick={() => navigate("/")}>
            25€{" "}
          </AmountButton>
          <AmountButton type='submit' onClick={() => navigate("/")}>
            50€{" "}
          </AmountButton>
          <AmountButton type='submit' onClick={() => navigate("/")}>
            100€{" "}
          </AmountButton>
          <AmountButton type='submit' onClick={() => navigate("/")}>
            500€{" "}
          </AmountButton>
          <AmountButton type='submit' onClick={() => navigate("/")}>
            1000€{" "}
          </AmountButton>
        </ButtonContainer>

        <DifferentLabel>Other Amount:</DifferentLabel>
        <Input
          type='number'
          required
          value={donation}
          onChange={(event) => handleDonationChange(event.target.value)}
          min='1'
          step='any'
        />
        <DonationButton onClick={() => console.log("Donated")} />
      </Form>
    </GreenBlock>
  );
};

export default DonationForm;

const GreenBlock = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100vw;
  height: 65vh;
  background-color: #61892f;
  align-items: center;
  justify-content: center;
  overflow-y: hidden;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
`;

const NewIcon = styled(GiPiggyBank)`
  color: ${({ theme }) => theme.colors.secondary};
  margin-right: 10px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10vw;
  width: 100%;
`;

const Input = styled.input`
  background-color: transparent;
  border: none;
  border-bottom: 4px solid ${({ theme }) => theme.colors.black};
  margin-bottom: 40px;
  margin-top: 10px;
  width: 80%;
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
  font-size: 2rem;
  color: ${({ theme }) => theme.colors.black};
`;

const DifferentLabel = styled.label`
  margin-top: 15px;
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.black};
`;

const DonationButton = styled(BiDonateHeart)`
  background-color: ${({ theme }) => theme.colors.secondary};
  color: white;
  padding: 8px;
  height: 64px;
  width: 256px;
  border-radius: 20px;
`;

const AmountButton = styled.button`
  border-radius: 10px;
  height: 50px;
  width: 125px;
  margin-bottom: 10px;
  margin-right: 15px;
  border: none;
  opacity: 0.7;
  box-shadow: 4px 4px rgba(0, 0, 0, 0.2);
  background: ${({ theme }) => theme.colors.secondary};

  &:focus {
    opacity: 1;
  }
`;

const ButtonContainer = styled.div`
  display: flexbox;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
