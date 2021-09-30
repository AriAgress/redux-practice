import React from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';

const Container = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-evenly;
  align-self: center;

  width: 60vw;
`;

const CardContainer = styled.div`
  height: 350px;
  width: 250px;
  padding: 1rem;
`;

const Image = styled.img`
width: 100%;
height: 100%;
`

const MovieCard = () => {

  const moovie = useSelector(state => state.searchMovies);
  const dispatch = useDispatch();

  return (
    <Container>
      {moovie.map((item, index) => (
        <CardContainer key={index} item={item}>
          <Image src={item.Poster}></Image>
        </CardContainer>
      ))}
    </Container>
  );
};

export default MovieCard;
