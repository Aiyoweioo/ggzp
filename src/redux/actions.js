/*
包含n个action creator
异步action
同步action
 */
import {reqRegister, reqLogin} from '../api'
import {AUTH_SUCCESS, ERROR_MSG} from './action-types'
// 授权成功的action
const authSuccess = (user) => ({type: AUTH_SUCCESS, data: user})
// 错误信息的action
const errorMsg = (msg) => ({type: ERROR_MSG, data: msg})

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