const colorReducer = (state = null, action) => {
  switch (action.type){
    case 'DARK_MODE':
      return action.payload;
      default:
        return state;
  }
}

export default colorReducer;