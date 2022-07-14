import { NavLink } from "react-router-dom";
import { NavButton, NavItemLabel } from "./styles";
import { BottomNavigationItemProps } from "./types";
import { useEffect, useState } from "react";
import styled from "styled-components";

function BottomNavigationItem(props: BottomNavigationItemProps) {
  const [active, setActive] = useState(false);

  const handleActiveChange = (value: boolean) => {
    setActive(value);
  };

  useEffect(() => {
    setActive(false);
  }, []);

  return (
    <NavLink
      to={props.link}
      className={({ isActive }) =>
        handleActiveChange(isActive) + (isActive ? "activated" : "")
      }
    >
      <NavButton>
        {active ? <ColorHome>{props.icon}</ColorHome> : <div>{props.icon}</div>}
        <NavItemLabel>{props.label}</NavItemLabel>
      </NavButton>
    </NavLink>
  );
}

export default BottomNavigationItem;

const ColorHome = styled.div`
  color: ${({ theme }) => theme.colors.secondary};
`;
