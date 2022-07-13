import React from 'react'
import InformationContent from '../../components/DetailView/InformationContent'
import InformationHeader from '../../components/DetailView/InformationHeader'
import MainImageSection from '../../components/DetailView/MainImageSection'
import { DetailPageProps } from './types'

const DetailView = (props: DetailPageProps) => {
  return (
    <>
        <MainImageSection imageSrc={props.imageSrc} animalId={'ididididid'} />
        <InformationHeader animalName={props.animalName} location={props.location} date={props.date}/>
        <InformationContent text={props.text}/>
    </>
    
  )
}

export default DetailView