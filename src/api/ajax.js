/*
能发送ajax请求的函数模块，不管具体的url,data
函数的返回值是promise对象
*/
// axios.get(url) axios.post(url, data)
import axios from 'axios' 

export default function ajax(url, data={}, type='GET'){
    if(type==='GET'){ // 发送get请求
        // data: {username: Tom , password: 123 }, 需要拼接字符串
        // 目标： paramStr = username=Tom&password=123
        let paramStr = ''
        Object.keys(data).forEach(key => {
            paramStr += key + '=' + data[key] + '&'
        })
        if(paramStr){
            paramStr = paramStr.substring(0, paramStr.length-1)
        }
        return axios.get(url + '?' + paramStr)
    }else{
        // 发送post请求
        return axios.post(url, data)
    }
}
