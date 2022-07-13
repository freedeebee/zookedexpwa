import React from 'react'
import styled from 'styled-components'

const InformationContent = () => {
  return (
    <Scroller>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam consequatur iure numquam, neque sit porro enim, doloribus nulla nemo soluta magnam, at laudantium delectus quod tempora alias a possimus! Libero.</p>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est deserunt, maxime nisi aliquam quisquam magni deleniti minus officia quia veritatis, hic, obcaecati laudantium esse unde temporibus placeat perspiciatis incidunt magnam.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim velit, sit magni esse ut corporis. Neque nostrum sint natus, minus dolore quia temporibus in corporis repudiandae doloribus, iure similique commodi.</p>
    </Scroller>
  )
}

export default InformationContent

const Scroller= styled.div`
overflow-y: scroll;
height: calc(100% - 250px);
padding: 8px 8px 64px 8px;
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