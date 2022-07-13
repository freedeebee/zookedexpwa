import React from 'react'
import InformationContent from '../../components/DetailView/InformationContent'
import InformationHeader from '../../components/DetailView/InformationHeader'
import MainImageSection from '../../components/DetailView/MainImageSection'

const DetailView = () => {
  return (
    <>
        <MainImageSection/>
        <InformationHeader/>
        <InformationContent/>
    </>
    
  )
}

export default DetailView