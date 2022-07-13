import React from 'react';
import Card from '../Card/Card'
import { format } from 'date-fns'

function ListView() {
   const catcard = {
      name: 'Cat', 
      date: new Date("07/13/2022"),
      src: 'https://picsum.photos/id/237/400/200',
      location: 'Frankfurt',
      views: 10
   };


  return (
    <div className="App">
            <Card
                key={'test-1'}
                name= {catcard.name}
                date = {catcard.date}
                src = {catcard.src}
                location = {catcard.location}
                views = {catcard.views}
            />
    </div>
  );
}

export default ListView;