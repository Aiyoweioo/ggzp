/*
包含n个action creator
异步action
同步action
 */
import {reqRegister, reqLogin, reqUpdateUser, reqUser, reqUserList} from '../api'
import {AUTH_SUCCESS, ERROR_MSG, RECEIVE_USER, RESET_USER, GET_USERS_LIST} from './action-types'
// 授权成功的action
const authSuccess = (user) => ({type: AUTH_SUCCESS, data: user})
// 错误信息的action
const errorMsg = (msg) => ({type: ERROR_MSG, data: msg})
// 接收用户的同步action
const receiveUser = (user) => ({type: RECEIVE_USER, data: user})
// 重置用户的同步action
export const resetUser = (msg) => ({type: RESET_USER, data: msg})
// 接收用户列表的同步action
export const receiveUserList = (userList) => ({type: GET_USERS_LIST, data: userList})
 
// 注册的异步action
export const register = (user) =>{
    const {username, password, password1, type} = user
    //  前端表单验证：数据是否为空，两次密码是否相同， 返回一个errorMsg同步的action
    if(!username){
        return errorMsg('用户名不能为空！')
    }else if(password!==password1){
        return errorMsg('2次密码要一致！')
    }
    // 表单数据合法，返回一个发ajax请求的异步action函数 
    return async dispatch =>{
       
        const res = await reqRegister({username, password, type})
        //console.log(res)
        const result = res.data
        if(result.code===0){
            // success
            // 授权分发成功的action
            dispatch(authSuccess(result.data))
        }else{
            // fail

            dispatch(errorMsg(result.msg))
        }
     }
 }

 
 // 登录的异步action
 export const login = (user) =>{
    const {username, password} = user
    //  前端表单验证：数据是否为空，两次密码是否相同， 返回一个errorMsg同步的action
    if(!username){
        return errorMsg('用户名不能为空！')
    }else if(!password){
        return errorMsg('密码不能为空！')
    } 
    // 表单数据合法，返回一个发ajax请求的异步action函数 
    return async (dispatch) => {
        const res = await reqLogin({username, password})
        const result = res.data
        if(result.code===0){
            // success
            // 授权分发成功的action
            dispatch(authSuccess(result.data))
        }else{
            // fail
            dispatch(errorMsg(result.msg))
        }
     }
 }

//  更新用户异步action
export const updateUser = (user) =>{
    return async dispatch => {
        const res = await reqUpdateUser(user)
        const result = res.data
        if(result.code === 0){
            // 更新成功
            dispatch(receiveUser(result.data))
        }else{
            // 更新失败:msg
            dispatch(resetUser(result.msg))
        }
    }
}

// 获取用户异步action
export const getUser = () =>{
    return async dispatch => {
        const res = await reqUser()
        const result = res.data
        if(result.code === 0){
            // 获取成功
            dispatch(receiveUser(result.data))
        }else{
            // 获取失败:msg
            dispatch(resetUser(result.msg))
        }
    }
}

// 获取用户列表
export const getUserList = (type) =>{
    return async dispatch =>{
        const res = await reqUserList(type)
        const result = res.data
        if(result.code === 0){
            // 获取成功
            dispatch(receiveUserList(result.data))
        }
    }
}