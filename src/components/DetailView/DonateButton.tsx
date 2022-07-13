import React from 'react'
import { BiDonateHeart } from 'react-icons/bi'
import styled from 'styled-components'

const DonateButton = () => {

  return (
    <Button onClick={()=>console.log("Donated")}/>
  )
}

export default DonateButton


const Button = styled(BiDonateHeart)`
    @keyframes flicker {
        0%  {background-color:${({theme})=> theme.colors.primary};
        color: white}
        50% {background-color:white;
        color: ${({theme})=> theme.colors.primary}}
        100% {background-color:${({theme})=> theme.colors.primary};
        color: white}
    }

    position: absolute;
    padding: 8px;
    top:170px;
    right:20px;
    height:64px;
    width:64px;
    background-color: rgba(0,0,0,0.5);
    color:${({theme})=> theme.colors.secondary};
    border-radius: 20px;
    animation-name: flicker;
    animation-duration: 3s;
    animation-iteration-count: infinite;
`