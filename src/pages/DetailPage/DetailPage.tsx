import axios from "axios";
import { format } from "date-fns";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import InformationContent from "../../components/DetailView/InformationContent";
import InformationHeader from "../../components/DetailView/InformationHeader";
import MainImageSection from "../../components/DetailView/MainImageSection";

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
      {details !== undefined && (
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
      )}
    </>
  );
};

export default DetailView;
