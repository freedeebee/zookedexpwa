import React from 'react'
import katze from "../../assets/images/photo-1614027164847-1b28cfe1df60.jpg"
import { AnimalImage } from './styles'

const MainImage = () => {
  return (
    <AnimalImage src={katze} alt="animal"/>
  )
}

export default MainImage