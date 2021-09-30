import React, {useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";
import {searchMovie} from "../../actions"
import {API} from "../../routes/api-routes"

const Movie = () => {
  const moovie = useSelector((state) => state.searchMovies);
  const dispatch = useDispatch();
  
  // useEffect(() => {
  //   API.searchMovieByTitle()
  //   .then(res => dispatch(searchMovie(res)));
  // }, [dispatch]);

  return (
    <div>
      {/* {moovie.map((item, index) => (
        <div key={index}>
          <h1 style={{color:'white'}}>{item.Title}</h1>
        </div>
      ))} */}
      {/* <h1 style={{ color: 'white' }}>{moovie[0]?.Title}</h1> */}
    </div>
  );
}

export default Movie