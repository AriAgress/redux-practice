export const darkMode = () => {
  return {
    type: 'DARK_MODE',
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
