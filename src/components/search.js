import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { change, searchMovie } from '../actions';
import { API } from '../routes/api-routes';
import styled from 'styled-components';

const SearchContainer = styled.div`
  height: 35px;
  width: 350px;

  background-color: rgb(60, 64, 67);
  border-radius: 50px;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const TextBox = styled.input`
  height: 40px;
  width: 285px;

  border: none;
  outline: none;
  font-size: 20px;
  background: none;
  color: rgb(183, 198, 185);

  /* @media (max-width: 575px) {
    width: 300px;
    height: 30px;
    font-size: 15px;
  }

  @media (max-width: 375px) {
    width: 250px;
    height: 30px;
    font-size: 13px;
  } */
`;

const SearchButton = styled.button`
  height: 40px;
  width: 40px;

  font-size: 20px;
  background: none;
  color: rgb(183, 198, 185);

  display: flex;
  align-items: center;

  border: none;

  &:hover {
    cursor: pointer;
    color: white;
  }
  /* @media (max-width: 575px) {
    width: 30px;
    height: 30px;
    font-size: 15px;
  } */
`;

const Search = () => {
  const ssearch = useSelector(state => state.searchTerms);
  const dispatch = useDispatch();

  const onChange = e => {
    e.preventDefault();
    dispatch(change(e));
  };

  const onClick = async e => {
    e.preventDefault();
    const res = await API.searchAPI(ssearch);
    dispatch(searchMovie(res.Search));
    console.log(res);
  };

  return (
    <div>
      <form>
        <SearchContainer>
          <TextBox onChange={onChange} />
          <SearchButton onClick={e => onClick(e)}>GO</SearchButton>
        </SearchContainer>
      </form>
    </div>
  );
};

export default Search;
