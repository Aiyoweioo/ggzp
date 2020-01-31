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

export default class Login extends Component {
    state = {
        username: '',
        password: ''
    }
    
    // 监听input改变
    handleChange = (name, val) =>{
        this.setState({
            [name]: val
        })
    }
    // 跳转到注册页面
    toRegister = () => {
        this.props.history.replace('/register')
    }
    render() {
        return (
            <div>
               <NavBar>硅谷直聘</NavBar>
               <Logo />
               <WingBlank>
                   <List>
                       <WhiteSpace/>
                       <InputItem toChange={val=> {this.handleChange('username', val)}}>用户名：</InputItem>
                       <WhiteSpace/>    
                        <InputItem type="password" toChange={val=> {this.handleChange('password', val)}}>密码：</InputItem>
                        <WhiteSpace/>
                        <Button type="primary">登录</Button>
                        <WhiteSpace/>
                        <Button onClick={this.toRegister}>注册</Button> 
                   </List>
               </WingBlank>
            </div>
        )
    }
}