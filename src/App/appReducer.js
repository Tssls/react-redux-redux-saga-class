function appReducer(state = {}, action) {
    switch (action.type) {
    case 'GET_DECREMENT':
      return Object.assign({},state,{data:action.data});
    case 'GET_DECREMENT_ERR':
      return Object.assign({},state,{error:action.error});
    default:
      return state;
    }
  }

export default appReducer