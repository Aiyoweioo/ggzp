/*
包含n个reducer函数: 根据老的state和指定的action返回一个新的state
 */


import {combineReducers} from 'redux'
import {
  AUTH_SUCCESS, 
  ERROR_MSG, 
  RECEIVE_USER, 
  RESET_USER,
  GET_USERS_LIST
} from './action-types'
import {getRedirectTo} from '../utils/index'
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
    const {type, header} = action.data
      return {...action.data, redirectTo:getRedirectTo(type, header)}
    case ERROR_MSG: // data是msg
      return {...state, msg: action.data}
    case RECEIVE_USER: // data是user
      return action.data
    case RESET_USER: // data是msg
      return {...initUser, msg: action.data}
    default:
      return state
  }
}

const initUserList = []
// 产生userList状态的reducer
function userList(state = initUserList, action){
  switch(action.type){
    case GET_USERS_LIST:
      return action.data  // data为userList
    default:
      return state
  }
}
// 向外暴露的状态的结构 {user: {}, userList: []}
export default combineReducers({
  user,
  userList
}) 

