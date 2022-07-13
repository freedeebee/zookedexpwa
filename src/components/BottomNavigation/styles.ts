import styled from "styled-components";

export const BottomNavWrapper = styled.nav`
    position: fixed;
    bottom: 0;
    display: flex;
    height: 64px;
    background: ${({theme}) => theme.colors.darkGrey};
    color: white;
    width: 100%;
`