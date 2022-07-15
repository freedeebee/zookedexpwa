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

export type DetailInfo = {
  classification: string;
  commonName: string;
  diet: string;
  family: string;
  genus: string;
  height: string;
  id: number;
  kingdom: string;
  locations: string;
  name: string;
  order: string;
  phylum: string;
  populationSize: string;
  scientificName: string;
  slogan: string;
  updatedOn: string;
  weight: string;
}

const DetailView = () => {
  const [details, setDetails] = useState<DetailInfo>();
  const [imageSrc, setImageSrc] = useState();
  const [location, setLocation] = useState();
  const { id } = useParams();

  useEffect(() => {
    if (id)
      axios
        .get(`/collection/${id}`)
        .then((res) => {
          console.log(res.data)
          setImageSrc(res.data[id].gallery[0].url)
          setLocation(res.data[id].location)
          // @ts-ignore
          setDetails(res.data[id].detailedInformation)
        });
  }, [id]);

  return (
    <>
      {details !== undefined && (
        <>
          <MainImageSection
            imageSrc={imageSrc}
            animalId={details.id}
          />
          <InformationHeader
            animalName={details.name}
            location={location}
            date={format(
              new Date(details.updatedOn),
              "dd.MM.yyyy"
            ).toString()}
          />
          <InformationContent details={details} />
        </>
      )}
    </>
  );
};

export default DetailView;
