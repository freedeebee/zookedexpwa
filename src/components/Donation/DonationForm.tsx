import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { GiPiggyBank } from "react-icons/gi";
import { BiDonateHeart, BiEuro } from "react-icons/bi";

const DonationForm = () => {
  const [donation, setDonation] = useState("");
  const navigate = useNavigate();

  return (
    <GreenBlock>
      <Container>
        <Label>Donate now:</Label>
      </Container>
      <ButtonContainer>
        <AmountButton onClick={() => setDonation("10")}>10 €</AmountButton>
        <AmountButton onClick={() => setDonation("25")}>25 €</AmountButton>
        <AmountButton onClick={() => setDonation("50")}>50 €</AmountButton>
        <AmountButton onClick={() => setDonation("100")}>100 €</AmountButton>
        <AmountButton onClick={() => setDonation("500")}>500 €</AmountButton>
        <AmountButton onClick={() => setDonation("1000")}>1000 €</AmountButton>
      </ButtonContainer>
      <Form>
        <DifferentLabel>Amount:</DifferentLabel>
        <Input
          required
          value={donation}
          onChange={(event) => setDonation(event.target.value)}
          min='1'
          step='any'
        />
        <DonationButton onClick={() => alert("Thanks for donating")} />
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
  justify-content: center;
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
  padding: 8vw;
  width: 100%;
`;

const Input = styled.input`
  background-color: transparent;
  border: none;
  border-bottom: 4px solid ${({ theme }) => theme.colors.black};
  margin-bottom: 40px;
  margin-top: 10px;
  width: 30%;
  font-size: 1.2rem;
  text-align: center;
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
  margin-top: 10px;
  font-size: 1.5rem;
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
  font-size: 1rem;
  box-shadow: 4px 4px rgba(0, 0, 0, 0.2);
  background: ${({ theme }) => theme.colors.secondary};

  &:focus {
    opacity: 1;
  }
`;

const ButtonContainer = styled.div`
  display: flexbox;
  margin-top: 30px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
