// 注册路由组件

import React, {Component} from 'react'
import {
    NavBar,
    WingBlank,
    List, 
    InputItem,
    WhiteSpace,
    Radio,
    Button
} from 'antd-mobile'
import Logo from '../../components/logo/logo'

const ListItem = List.Item

export default class Register extends Component {
    state = {
        username: '', //用户名
        password:'', // 密码
        password1:'', // 确认密码
        type: 'laoban' // 类型dashen/laoban
    }
    register = () => {

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
        return (
            <div>
               <NavBar>硅谷直聘</NavBar>
               <Logo />
               <WingBlank>
                   <List>
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