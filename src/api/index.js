/*
包含了N个接口请求的函数的模块
函数返回值是promise对象
*/

import ajax from './ajax'
// 注册接口user：username，password, type
export const reqRegister = (user) => ajax('/register', user, 'POST')
// 登录接口username,password
export const reqLogin = ({username, password}) => ajax('/login',{username, password}, 'POST')
// 更新用户接口
export const reqUpdateUser = (user) => ajax('/update',user, '/POST' )
