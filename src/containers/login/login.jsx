// 注册路由组件
import React, {Component} from 'react'
import {
    NavBar,
    WingBlank,
    List, 
    InputItem,
    WhiteSpace,
    Button
} from 'antd-mobile'
import {login} from '../../redux/actions'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'
import Logo from '../../components/logo/logo'
import '../../assets/css/style.less'


class Login extends Component {
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
    // 登录
    login = () =>{
        this.props.login(this.state)

    }
    render() {
        const {redirectTo, msg} = this.props.user
        if(redirectTo){
            return <Redirect to={redirectTo}/>
        }
        // console.log(msg)
        // if(msg){
        //     Toast.fail(msg)
        // }
        return (
            <div>
               <NavBar>硅谷直聘</NavBar>
               <Logo />
               <WingBlank>
                   <List>
                   {msg ? <div className='error-msg'>{msg}</div> : null}
                       <WhiteSpace/>
                       <InputItem onChange={val=> {this.handleChange('username', val)}}>用户名：</InputItem>
                       <WhiteSpace/>    
                        <InputItem type="password" onChange={val=> {this.handleChange('password', val)}}>密码：</InputItem>
                        <WhiteSpace/>
                        <Button type="primary" onClick={this.login}>登录</Button>
                        <WhiteSpace/>
                        <Button onClick={this.toRegister}>注册</Button> 
                   </List>
               </WingBlank>
            </div>
        )
    }
}

export default connect(
    state =>({user: state.user}),
    {login}
)(Login)