import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { createStore,applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { Provider } from 'react-redux';
import rootSaga from './sagas';
import RouteApp from './router';

//引入合并之后的reducer
import rootReducer from './reducer';

const sagaMiddleware = createSagaMiddleware()


//使用redux的createstore来创建一个store
const store = createStore(
  //第一个参数为reducer
  rootReducer,
  //第二个参数为redux提供的applyMiddleware方法，它接收一个数组可以依次往里面添加中间件
  applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(rootSaga)

ReactDOM.render(
  //使用react-redux的Provider来从顶层组件传入store，这样保证在这个组件下的所有组件都可以使用store
  <Provider store={store}>
    <RouteApp />
  </Provider>,
  document.getElementById('root')
);

