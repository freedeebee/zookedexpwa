import React from 'react';
import Card from '../Card/Card'
import { format } from 'date-fns'
import { AnimalCard } from './styles'

function ListView() {
   const dogcard = {
      id: 1,
      name: 'Dog', 
      date: new Date("07/13/2022"),
      src: 'https://picsum.photos/id/237/400/200',
      location: 'Frankfurt',
      views: 10
   };
   
   const bearcard = {
      id: 2,
      name: 'Bear', 
      date: new Date("07/12/2022"),
      src: 'https://picsum.photos/id/1020/400/200',
      location: 'Mannheim',
      views: 3
   };

   const lioncard = {
      id: 3,
      name: 'Lion', 
      date: new Date("07/11/2022"),
      src: 'https://picsum.photos/id/1074/400/200',
      location: 'Berlin',
      views: 100
   };


  return (
    <div className="App">
            <AnimalCard>
               <Card
                key={'test-1'}
                id={dogcard.id}
                name= {dogcard.name}
                date = {dogcard.date}
                src = {dogcard.src}
                location = {dogcard.location}
                views = {dogcard.views}

            />
            </AnimalCard>
            <AnimalCard>
               <Card
                key={'test-2'}
                id={lioncard.id}
                name= {lioncard.name}
                date = {lioncard.date}
                src = {lioncard.src}
                location = {lioncard.location}
                views = {lioncard.views}
            />
            </AnimalCard>
            <Card
                key={'test-3'}
                id={bearcard.id}
                name= {bearcard.name}
                date = {bearcard.date}
                src = {bearcard.src}
                location = {bearcard.location}
                views = {bearcard.views}
            />
    </div>
  );
}

export default ListView;