/*
包含n个reducer函数: 根据老的state和指定的action返回一个新的state
 */


import {combineReducers} from 'redux'
import {AUTH_SUCCESS, ERROR_MSG} from './action-types'
const initUser = {
  username: '', // 用户名
  type: '', //dashen laoban
  msg:'' ,//错误提示信息
  redirectTo: '' // 需要自动重定向的路由
}
// 产生user状态的reducer
function user(state=initUser, action){
  switch(action.type){
    case AUTH_SUCCESS: // data是user,将原来的数据解构出来，action.data覆盖掉
      return {...action.data, redirectTo:'/'}
    case ERROR_MSG: // data是msg
      return {...state, msg: action.data}
    default:
      return state
  }
}


// 向外暴露的状态的结构 {user: {}}
export default combineReducers({
  user
}) 

