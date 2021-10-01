import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { darkMode } from '../actions'
import styled from 'styled-components'

const SwitchBox = styled.div`
  background: ${props => (props.colorSwitch === true ? 'black' : 'white')};
  color: ${props => (props.colorSwitch === true ? 'white' : 'black')};
  width: 50px;
  cursor: pointer;
`;

const ModeSwitch = () => {
  const colorSwitch = useSelector((state) => state.colorSwitch);
const dispatch = useDispatch();

  return (
    <SwitchBox colorSwitch={colorSwitch} onClick={() => dispatch(darkMode(!colorSwitch))} >
      {colorSwitch ? 'dark' : 'light'}
    </SwitchBox>
  )
}

export default ModeSwitch
