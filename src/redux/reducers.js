/*
包含n个reducer函数: 根据老的state和指定的action返回一个新的state
 */


import {combineReducers} from 'redux'

function xxx(state=0, action) {
  return state
 }

function xx(state=0, action) {
  return state
}

// 向外暴露的状态的结构 {xxx: 0, xx: 0}
export default combineReducers({
  xxx,
  xx
}) 

