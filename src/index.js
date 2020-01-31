/*
入口JS
 */
import React from 'react'
import ReactDOM from 'react-dom'
// 路由api
import {HashRouter, Route, Switch } from 'react-router-dom'
import Register from './containers/register/register'
import Login from './containers/login/login'
import Main from './containers/main/main'

// 引入store
import store from './redux/store'
import {Provider} from 'react-redux'

ReactDOM.render(
  <Provider store={store}>
    <HashRouter>
      <Switch> /*路由切换*/
        <Route path='/register' component={Register}></Route>
        <Route path='/login' component={Login}></Route>
        <Route component={Main}></Route> /*默认路由*/
      </Switch>
    </HashRouter>
  </Provider>
  
, document.getElementById('root'))