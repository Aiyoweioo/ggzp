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
    render(){
        return (
            <div>
                <NavBar>大神信息完善</NavBar>
                <HeaderSelect setHeader={this.setHeader}/>
                <InputItem onChange={val => this.handleChange('post', val)}>求职岗位：</InputItem>
                <TextareaItem title='个人介绍：'
                    rows={4} 
                    onChange={val => this.handleChange('info', val)}/>
                <Button type="primary">保存</Button>
            </div>
        )
    }
}

export default connect(
    state => ({})
)(DashenInfo)