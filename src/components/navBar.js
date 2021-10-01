import React from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux';

const Nav = styled.div`
  height: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props =>
    props.colorSwitch === true ? 'rgb(210,210,210)' : 'rgb(18, 18, 18)'};
`;

const NavBar = (props) => {
    const colorSwitch = useSelector(state => state.colorSwitch);

  return (
    <Nav
    colorSwitch={colorSwitch}
    >
      {props.children}
    </Nav>
  )
}

export default NavBar
