const searchTerms = (state = '', action) => {
  switch (action.type){
    case "CHANGE":
      return action.payload.target.value;
      default:
        return state;
  }
}

export default searchTerms