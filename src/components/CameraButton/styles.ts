import styled from "styled-components";

export const StyledCameraButton = styled.label`
    position: absolute;
    bottom: 32px;
    left: calc(50% - 32px);
    height: 64px;
    width: 64px;
    background: ${({theme}) => theme.colors.primary};
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    font-size: 36px;

    input[type="file"] {
        display: none;
    }
`

export const HiddenFileInput = styled.input`

`