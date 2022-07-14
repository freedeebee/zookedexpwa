import { Outlet } from "react-router-dom";
import styled from "styled-components";
import BottomNavigation from "../BottomNavigation/BottomNavigation";

export const StyledContentContainer = styled.div`
  height: calc(100vh - 64px);
`;

function ContentContainer() {
  return (
    <StyledContentContainer>
      <Outlet />
      <BottomNavigation />
    </StyledContentContainer>
  );
}

export default ContentContainer;
