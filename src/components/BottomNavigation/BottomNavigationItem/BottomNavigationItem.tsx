import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { NavButton, NavItemLabel } from "./styles";
import { BottomNavigationItemProps } from "./types";

function BottomNavigationItem(props: BottomNavigationItemProps) {
  return (
    <>
      <NavLink to={props.link}>
        <NavButton onClick={() => props.onClick()}>
          {props.active === true ? (
            <ActiveIcon>{props.icon}</ActiveIcon>
          ) : (
            <div>{props.icon}</div>
          )}
          <NavItemLabel>{props.label}</NavItemLabel>
        </NavButton>
      </NavLink>
    </>
  );
}

export default BottomNavigationItem;

const ActiveIcon = styled.div`
  color: ${({ theme }) => theme.colors.secondary};
`;
