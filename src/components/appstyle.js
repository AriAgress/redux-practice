import styled from 'styled-components';

const AppBody = styled.div`
  min-height: 100vh;
  display: flex;
  flex-flow: column wrap;

  background-color: ${props =>
    props.colorSwitch === true ? 'rgb(245,247,247)' : 'rgb(32, 33, 35)'};
`;

export default AppBody;
