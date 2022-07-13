import axios from 'axios';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Card from '../Card/Card'
import { AnimalCard } from './styles'

type AnimalCard = {
   id: number;
   name: string;
   src: string; 
   date: Date;
   location: string;
   views: number;
}

function ListView() {
   const [cardData, setCardData] = useState([])

   useEffect(()=>{
      axios.get('/animalCards.json')
      .then(res => setCardData(res.data.animalcards))
      .catch(err => console.error(err))
   }, [])

  return (
    <Container>
      {cardData.map((item:AnimalCard) => (
            <AnimalCard key={item.id}>
               <Card
                id={item.id}
                name= {item.name}
                date = {new Date(item.date)}
                src = {item.src}
                location = {item.location}
                views = {item.views}

            />
            </AnimalCard>
            )
         )}
            
    </Container>
  );
}

export default ListView;

const Container = styled.div`
position: absolute;
top: -10px;
padding: 20px 16px 20px 16px;
height: 88vh;
overflow-y: scroll;
::-webkit-scrollbar {
  width: 8px;
}

/* Track */
::-webkit-scrollbar-track {
  border-radius: 10px;
}
 
/* Handle */
::-webkit-scrollbar-thumb {
  background: ${({theme})=> theme.colors.secondary}; 
  border-radius: 10px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: ${({theme})=> theme.colors.secondary} 
}
`