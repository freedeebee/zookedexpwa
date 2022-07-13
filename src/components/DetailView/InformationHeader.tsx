import React from 'react'
import {GoLocation} from 'react-icons/go'
import {BiTimeFive} from 'react-icons/bi'
import styled from 'styled-components'

const InformationHeader = () => {
  return (
    <Container>
        <Name>
            <p>AnimalName</p>
        </Name>
        <IconData>
          <Icon>
            <GoLocation/>
          </Icon>
          <p>Ghana, Accra</p>
        </IconData>
        <IconData>
          <Icon>
            <BiTimeFive/>
          </Icon>
          <p>01.01.1970</p>
        </IconData>
    </Container>
  )
}

export default InformationHeader

const Container = styled.div`
display: flex;
align-items: center;
justify-content: space-around;
background: ${({theme})=> theme.colors.secondary};
color: ${({theme})=> theme.colors.black};
`

const Name = styled.div`
display: flex;
align-items: center;
justify-content: center;
`

const IconData = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
margin: 1vh;
`
const Icon = styled.div`
  color: ${({theme})=> theme.colors.black};
  margin-right: 8px;
`