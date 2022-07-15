import axios from "axios";
import { format } from "date-fns";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import InformationContent from "../../components/DetailView/InformationContent";
import InformationHeader from "../../components/DetailView/InformationHeader";
import MainImageSection from "../../components/DetailView/MainImageSection";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";

type AnimalCardDetails = {
  id: number;
  name: string;
  src: string;
  date: Date;
  location: string;
  views: number;
  text: string;
};

const DetailView = () => {
  const [details, setDetails] = useState<any>();
  const { id } = useParams();

  useEffect(() => {
    if (id)
      axios
        .get(`/collection/${id}`)
        .then((res) => setDetails(Object.values(res.data)));
  }, [id]);

  return (
    <>
      {details !== undefined ? (
        <>
          <MainImageSection
            imageSrc={details[0]?.gallery[0].url}
            animalId={details[0]?.detailedInformation.id}
          />
          <InformationHeader
            animalName={details[0]?.detailedInformation.name}
            location={details[0]?.location}
            date={format(
              new Date(details[0]?.detailedInformation.updatedOn),
              "dd.MM.yyyy"
            ).toString()}
          />
          <InformationContent text={details[0]?.detailedInformation.slogan} />
        </>
      ) : (
        <Container>
          <LoadingSpinner />
        </Container>
      )}
    </>
  );
};

export default DetailView;

const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 45vh;
`;
