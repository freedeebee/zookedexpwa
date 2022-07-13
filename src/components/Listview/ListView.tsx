import axios from 'axios';
import React, { useEffect, useState } from 'react';
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
    <div className="App">
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
            
    </div>
  );
}

export default ListView;