import React from 'react'
import styled from 'styled-components'
import { AnimalInformationProps } from './types'

const InformationContent = (props: AnimalInformationProps) => {
  return (
    <Scroller>
      {props.text}
    </Scroller>
  )
}

export default InformationContent

const Scroller= styled.div`
overflow-y: scroll;
height: calc(100% - 300px);
padding: 16px 16px 64px 16px;
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