/*
大神信息完善的路由容器组件
*/

import React, {Component} from 'react'
import {connect} from 'react-redux'
import {
    NavBar,
    InputItem,
    Button,
    TextareaItem
} from 'antd-mobile'
import HeaderSelect from '../../components/header-select/header-select'
import {updateUser} from '../../redux/actions'
import { Redirect } from 'react-router-dom'
class DashenInfo extends Component {
    state = {
        info: '',
        post: '',
        header: ''
    }
    // 监听输入发生变化
    handleChange = (name,val) => {
        // 更新状态,放到[]将属性名字符串变成变量
        this.setState({
            [name]: val
        })
    }
    // 更新头像
    setHeader = (header) => {
        this.setState({
            header
        })
        }
    // 保存信息，发送到后台
    save = () =>{
        this.props.updateUser(this.state)
    }
    render(){
        // 如果信息完善，自动重定向到对应主界面
        const {header, type} = this.props.user
        if(header){
            const path = type === 'dashen' ? '/dashen' : '/laoban'
            return <Redirect to={path} />
        }
        return (
            <div>
                <NavBar>大神信息完善</NavBar>
                <HeaderSelect setHeader={this.setHeader}/>
                <InputItem onChange={val => this.handleChange('post', val)}>求职岗位：</InputItem>
                <TextareaItem title='个人介绍：'
                    rows={4} 
                    onChange={val => this.handleChange('info', val)}/>
                <Button type="primary" onClick={this.save}>保存</Button>
            </div>
        )
    }
}

export default connect(
    state => ({user: state.user}),
    {updateUser}
)(DashenInfo)