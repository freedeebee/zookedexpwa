import styled from "styled-components";

export const ProfileImage = styled.img`
  object-fit: cover;
  border-radius: 50%;
  height: 200px;
  width: 200px;
  margin: auto;
  display: block;
  margin-top: 65px;
`;

export const Wave = styled.svg`
  display: block;
  position: absolute;
  top: 100px;
  overflow: hidden;
  width: 100%;
  z-index: -10;
`;

export const WaveContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.primary};
  width: 100%;
  height: 130px;
  top: 0;
  position: absolute;
  z-index: -10;
`;
export const ProfileDetails = styled.h4`
  text-align: center;
`;

export const ProfileName = styled.h2`
  text-align: center;
  margin-top: 50px;
`;
