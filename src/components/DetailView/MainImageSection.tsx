import React from 'react'
import katze from "../../assets/images/photo-1614027164847-1b28cfe1df60.jpg"
import BackButton from './BackButton'
import DonateButton from './DonateButton'
import { AnimalImage } from './styles'

const MainImageSection = () => {
  return (
    <>
      <AnimalImage src={katze} alt="animal"/>
      <BackButton/>
      <DonateButton/>
    </>
  )
}

export default MainImageSection