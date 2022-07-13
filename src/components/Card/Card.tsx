import { CardProps } from "./types"
import React, { useEffect } from 'react';
import { format } from 'date-fns'
import { AnimalCard } from './styles'

export default function Card(props: CardProps) {
   useEffect(() => {  
        
        console.log(props)      
      }, []);
    
    return (
      <AnimalCard className="card">
         <p className="card--title">{props.name}</p>
         <img src={props.src} className="card--image" />
         <div className="card--infos">
            <span>{format(props.date, 'dd.MM.yyyy').toString()}</span>
            <span>{props.location}</span>
            <span>{props.views}</span>
         </div>
      </AnimalCard>
    )
}