import React from 'react'
import {GoLocation} from 'react-icons/go'
import {BsFillClockFill} from 'react-icons/bs'
import styled from 'styled-components'

const InformationHeader = () => {
  return (
    <Container>
        <div>
            <p>AnimalName</p>
        </div>
        <div>
            <GoLocation/>
            <BsFillClockFill/>
        </div>
    </Container>
  )
}

export default InformationHeader

const Container = styled.div`
display: flex;
align-items: center;
`