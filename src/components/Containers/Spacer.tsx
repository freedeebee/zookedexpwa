import styled from "styled-components";

export const Spacer = styled.div<{
    width?: string
}>`
    display: block;
    width: ${props => props.width || '32px'};
`