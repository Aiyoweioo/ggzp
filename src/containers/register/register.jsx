// 注册路由组件

import React, {Component} from 'react'
import {
    NavBar,
    WingBlank,
    List, 
    InputItem,
    WhiteSpace,
    Radio,
    Button,
} from 'antd-mobile'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'
import {register} from '../..//redux/actions'
import Logo from '../../components/logo/logo'

const ListItem = List.Item

class Register extends Component {
    state = {
        username: '', //用户名
        password:'', // 密码
        password1:'', // 确认密码
        type: 'laoban' // 类型dashen/laoban
    }
    register = () => {
        this.props.register(this.state)
        
    }
    // 处理输入数据的改变： 更新对应的状态
    handleChange = (name, val) => {
        // 更新状态,放到[]将属性名字符串变成变量
        this.setState({
            [name]: val
        })
    }
    toLogin = () =>{
        this.props.history.replace('/login')
    }
    render() {
        const {type} = this.state
        const {redirectTo, msg} = this.props.user
        //console.log(msg)
        // if(msg){
        //     Toast.fail(msg)
        // }
        // 如果有值，就会自动重定向
        if(redirectTo) {
            return <Redirect to={redirectTo}/>
        }
        return (
            <div>
               <NavBar>硅谷直聘</NavBar>
               <Logo />
               <WingBlank>
                   <List>
                   {msg ? <div className='error-msg'>{msg}</div> : null}
                       <WhiteSpace/>
                       <InputItem placeholder='请输入用户名' onChange={val => {this.handleChange('username', val)}}>用户名：</InputItem>
                       <WhiteSpace/>    
                        <InputItem type="password" placeholder='请输入密码' onChange={val => {this.handleChange('password', val)}}>密码：</InputItem>
                        <WhiteSpace/>
                        <InputItem type="password" placeholder='请确认密码' onChange={val => {this.handleChange('password1', val)}}>确认密码：</InputItem>
                        <WhiteSpace/>
                        <ListItem>
                            <span>用户类型：&nbsp;&nbsp;</span>
                            <Radio checked={type==='dashen'} onChange={val => {this.handleChange('type', 'dashen')}}>大神&nbsp;&nbsp;</Radio>
                            <Radio checked={type==='laoban'} onChange={val => {this.handleChange('type', 'laoban')}}>老板</Radio>
                        </ListItem>
                        <WhiteSpace/>
                        <Button type="primary" onClick={this.register}>注册</Button>
                        <WhiteSpace/>
                        <Button onClick={this.toLogin}>已有账户</Button>
                   </List>
               </WingBlank>
            </div>
        )
    }
}

export default connect(
    state =>({user: state.user}),
    {register}
)(Register)