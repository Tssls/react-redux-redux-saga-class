import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import App from './App'
import Home from './Home/index.jsx'

export default function RouteApp() {
    return (
      <Router>
        {/* 只匹配第一个路由path，这个可以避免重复匹配渲染组件 */}
          <Switch>
            {/* exact属性默认为false，为true时路径中的hash值必须和path完全一致才渲染对应的组件
            strict属性主要就是匹配反斜杠，规定是否匹配末尾包含反斜杠的路径，如果strict为true，
            则如果path中不包含反斜杠结尾，则他也不能匹配包含反斜杠结尾的路径，这个需要和exact结合使用 
            如下，push('/home')加上strict则不会渲染home组件不加则会渲染*/}
            <Route exact path="/">
              <App />
            </Route>
            {/* <Route exact strict path="/home/"> */}
            <Route exact strict path="/home">
              <Home />
            </Route>
          </Switch>
      </Router>
    );
  }