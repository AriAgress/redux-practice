const searchMovies = (state = [], action) => {
  switch (action.type){
    case "SEARCH_MOVIES":
      return action.payload;
      default:
        return state;
  }
}

export default searchMovies