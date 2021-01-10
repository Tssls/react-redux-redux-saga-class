function homeReducer(state = {
  num:0
}, action) {
    switch (action.type) {
    case 'HOME_INCREMENT':
      return Object.assign({},state,{num:state.num + 1});
    case 'HOME_DECREMENT':
      return Object.assign({},state,{num:state.num - 1});
    case 'GET_HOME_DATA':
      return Object.assign({},state,{data:action.data});
    case 'ERR_HOME_DATA':
      return Object.assign({},state,{err:action.error});
    case 'DEL_DECREMENT_HOME':
      return Object.assign({},state,{data:[]})
    default:
      return state;
    }
  }

export default homeReducer