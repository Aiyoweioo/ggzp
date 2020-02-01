/*
老板信息完善的路由容器组件
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
class LaobanInfo extends Component {
    state = {
        salary: '', // 职位薪资
        company: '', // 公司名称
        post: '', // 招聘职位
        info: '', // 职位要求
        header: '' // 头像
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
                <NavBar>老板信息完善</NavBar>
                <HeaderSelect setHeader={this.setHeader}/>
                <InputItem onChange={val => this.handleChange('post', val)}>招聘职位：</InputItem>
                <InputItem onChange={val => this.handleChange('company', val)}>公司名称：</InputItem>
                <InputItem onChange={val => this.handleChange('salary', val)}>职位薪资：</InputItem>
                <TextareaItem title='职位要求：'
                    rows={3} 
                    onChange={val => this.handleChange('info', val)}/>
                <Button type="primary" onClick={this.save}>保存</Button>
            </div>
        )
    }
}

export default connect(
    state => ({user: state.user}),
    {updateUser}
)(LaobanInfo)