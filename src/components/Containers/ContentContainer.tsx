import { Outlet } from "react-router-dom";
import styled from "styled-components";

export const StyledContentContainer = styled.div`
    height: calc(100vh - 64px);
    padding: 8px;
`

function ContentContainer() {
    return (
        <StyledContentContainer>
            <Outlet />
        </StyledContentContainer>
    )
}

export default ContentContainer