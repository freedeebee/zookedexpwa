import { BiDonateHeart } from "react-icons/bi";
import styled from "styled-components";
import { useNavigate, useParams } from "react-router-dom";

const DonateButton = () => {
  let navigate = useNavigate();
  const { id } = useParams();

  return <Button onClick={() => navigate("/donation/" + id)} />;
};

export default DonateButton;

const Button = styled(BiDonateHeart)`
  background-color: ${({ theme }) => theme.colors.secondary};
  color: white;
  position: absolute;
  padding: 8px;
  top: 170px;
  right: 20px;
  height: 64px;
  width: 64px;
  border-radius: 20px;
`;
