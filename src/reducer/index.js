import { combineReducers } from 'redux';
import appReducer from '../App/appReducer';
import homeReducer from '../Home/homeReducer';
//一个组件对应一个reducer，而使用redux里面的combineReducers来合并多个reducer，并导出成为store参数
const rootReducer = combineReducers({
  appReducer,
  homeReducer
});

export default rootReducer;