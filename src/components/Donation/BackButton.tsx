import React from "react";
import { MdArrowBack } from "react-icons/md";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";

const BackButton = () => {
  let navigate = useNavigate();
  const { id } = useParams();

  return <Button onClick={() => navigate("/detail/" + id)} />;
};

export default BackButton;

const Button = styled(MdArrowBack)`
  position: absolute;
  padding: 8px;
  top: 8px;
  left: 8px;
  height: 64px;
  width: 64px;
  color: white;
`;
