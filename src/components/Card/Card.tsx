import { CardProps } from "./types"
import React, { useEffect } from 'react';
import { format } from 'date-fns'
import { AnimalCard,ImageWrapper, InformationContainer, AnimalName, AnimalImage, Info, TextWrapper} from './styles'
import {BiTimeFive} from 'react-icons/bi'
import {GoLocation} from 'react-icons/go'
import {AiOutlineEye} from 'react-icons/ai'

export default function Card(props: CardProps) {
   useEffect(() => {  
        
        console.log(props)      
      }, []);
    
    return (
      <AnimalCard className="card">
         <ImageWrapper>
            <AnimalName className="card--title">{props.name}</AnimalName>
            <AnimalImage src={props.src} className="card--image"></AnimalImage>
         </ImageWrapper>
         <InformationContainer className="card--infos">
            <Info><BiTimeFive /><TextWrapper>{format(props.date, 'dd.MM.yyyy').toString()}</TextWrapper></Info>
            <Info><GoLocation /><TextWrapper>{props.location}</TextWrapper></Info>
            <Info><AiOutlineEye /><TextWrapper>{props.views}</TextWrapper></Info>
         </InformationContainer>
      </AnimalCard>
    )
}