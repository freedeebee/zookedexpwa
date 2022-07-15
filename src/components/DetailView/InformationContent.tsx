import React from "react";
import styled from "styled-components";
import { AnimalInformationProps } from "./types";

const InformationContent = ({details}: AnimalInformationProps) => {
  return (
      <Scroller>
        <InfoWrapper>
        <InfoHeader>Common Name:</InfoHeader>
        <InfoText>{details?.commonName}</InfoText>
        <InfoHeader>Name:</InfoHeader>
        <InfoText>{details?.name}</InfoText>
        <InfoHeader>Scientific Name:</InfoHeader>
        <InfoText>{details?.scientificName}</InfoText>
        <InfoHeader>Diet:</InfoHeader>
        <InfoText>{details?.diet}</InfoText>
        <InfoHeader>Weight:</InfoHeader>
        <InfoText>{details?.weight}</InfoText>
        <InfoHeader>Height:</InfoHeader>
        <InfoText>{details?.height}</InfoText>
        <InfoHeader>Locations:</InfoHeader>
        <InfoText>{details?.locations}</InfoText>
        <InfoHeader>Classification:</InfoHeader>
        <InfoText>{details?.classification}</InfoText>
        <InfoHeader>Family:</InfoHeader>
        <InfoText>{details?.family}</InfoText>
        <InfoHeader>Genus:</InfoHeader>
        <InfoText>{details?.genus}</InfoText>
        <InfoHeader>Kingdom:</InfoHeader>
        <InfoText>{details?.kingdom}</InfoText>
        <InfoHeader>Order:</InfoHeader>
        <InfoText>{details?.order}</InfoText>
        <InfoHeader>Phylum:</InfoHeader>
           <InfoText>
           {details?.phylum}
            </InfoText>

        <InfoHeader>Population Size:</InfoHeader>
           <InfoText>
           {details?.populationSize}
            </InfoText>
        <InfoHeader>Slogan:</InfoHeader>
           <InfoText>
           {details?.slogan}
            </InfoText>
        </InfoWrapper>

      </Scroller>
    )
};

export default InformationContent;

const InfoHeader = styled.div`
  font-size: 12px;
  font-weight: bold;
  margin-bottom: 8px;
`

const InfoText = styled.div`
  font-size: 14px;
  margin-bottom: 16px;
`

const InfoWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`

const Scroller = styled.div`
  overflow-y: scroll;
  height: calc(100% - 300px);
  padding: 8px 20px 64px 20px;
  ::-webkit-scrollbar {
    width: 8px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    border-radius: 10px;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.secondary};
    border-radius: 10px;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: ${({ theme }) => theme.colors.secondary};
  }
`;
