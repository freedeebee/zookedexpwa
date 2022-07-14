import styled from "styled-components";

export const AnimalCard = styled.div`
  width: 90vw;
  margin-bottom: 20px;
`;

export const ImageWrapper = styled.div`
  position: relative;
  display: flex;
  width: 100%;

  &:before {
    background: rgba(0, 255, 255, 0.5);
  }
`;

export const AnimalImage = styled.img`
  object-fit: cover;
  width: 100%;
  height: auto;
  border-radius: 10px 10px 0 0;
`;

export const AnimalName = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 2em;
  background-color: ${({ theme }) => theme.colors.secondary};
  padding: 4px 12px;
  color: ${({ theme }) => theme.colors.black};
  border-radius: 10px 0 10px 0;
`;

export const InformationContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.black};
  height: 3em;
  border-radius: 0 0 10px 10px;
`;

export const Info = styled.div`
  display: flex;
  align-items: center;
`;

export const TextWrapper = styled.span`
  margin-left: 3px;
`;
