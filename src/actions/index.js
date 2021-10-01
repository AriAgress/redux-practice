export const darkMode = (bool) => {
  return {
    type: 'DARK_MODE',
    payload: bool,
  };
};

export const searchMovie = (data) => {
  return{
    type: "SEARCH_MOVIES",
    payload: data,
  }
}

export const change = (event) => {
  return{
    type: "CHANGE",
    payload: event,
  }
}
