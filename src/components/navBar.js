import React from 'react'
import styled from 'styled-components'

const Nav = styled.div`
  height: 5rem;
  background-color: rgb(18, 18, 18);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const navBar = (props) => {
  return (
    <Nav>
      {props.children}
    </Nav>
  )
}

export default navBar
