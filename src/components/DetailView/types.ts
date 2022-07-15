import { DetailInfo } from "../../pages/DetailPage/DetailPage";

export type ImageBannerProps = {
    imageSrc: string | undefined;
    animalId:number | undefined;
}

export type AnimalHeaderProps = {
    animalName:string | undefined;
    location:string | undefined;
    date:string;
}

export type AnimalInformationProps = {
    details: DetailInfo | undefined;
}