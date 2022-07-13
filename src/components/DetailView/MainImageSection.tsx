import React from 'react'
import katze from "../../assets/images/photo-1614027164847-1b28cfe1df60.jpg"
import BackButton from './BackButton'
import DonateButton from './DonateButton'
import { AnimalImage } from './styles'
import { ImageBannerProps } from './types'

const MainImageSection = (props: ImageBannerProps) => {
  return (
    <>
      <AnimalImage src={props.imageSrc} alt="animal"/>
      <BackButton/>
      <DonateButton/>
    </>
  )
}

export default MainImageSection