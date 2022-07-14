import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import InformationContent from "../../components/DetailView/InformationContent";
import InformationHeader from "../../components/DetailView/InformationHeader";
import MainImageSection from "../../components/DetailView/MainImageSection";

type AnimalCardDetails = {
  id: number;
  name: string;
  src: string;
  date: string;
  location: string;
  views: number;
  text: string;
};

const DetailView = () => {
  const [details, setDetails] = useState<AnimalCardDetails>();
  const { id } = useParams();

  useEffect(() => {
    if (id)
      axios
        .get("/animalDetails.json")
        .then((res) => setDetails(res.data.animalcards[+id - 1]));
  }, [id]);

  return (
    <>
      {details?.date && (
        <>
          <MainImageSection imageSrc={details?.src} animalId={details?.id} />
          <InformationHeader
            animalName={details?.name}
            location={details?.location}
            date={details?.date}
          />
          <InformationContent text={details?.text} />
        </>
      )}
    </>
  );
};

export default DetailView;
