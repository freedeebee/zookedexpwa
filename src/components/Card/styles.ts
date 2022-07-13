import styled from "styled-components";

export const AnimalCard = styled.div`
   width: 100%;
`

export const ImageWrapper = styled.div`
   position: relative;
   display: flex;
   width: 100%;

   &:before {
      background: rgba(0,255,255, 0.5);
   }
`

export const AnimalImage = styled.img`
    object-fit: cover;
    width: 100%;
    height: 250px;
`


export const AnimalName = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    background-color: ${({theme}) => theme.colors.secondary};
    padding: 4px 8px;
    color: ${({theme}) => theme.colors.black};
    border-radius: 0 0 10px 0;
`

export const InformationContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    background-color: ${({theme}) => theme.colors.secondary};
    color: ${({theme}) => theme.colors.black};
    height: 2em;
    border-radius: 0 0 10px 10px;
`

export const Info = styled.div`
   display: flex;
   align-items: center;
`

export const TextWrapper = styled.span`
   margin-left: 3px;
`