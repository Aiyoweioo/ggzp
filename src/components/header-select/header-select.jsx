/*
信息完善的头像选择组件
*/

import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {List , Grid} from 'antd-mobile'
export default class HeaderSelect extends Component {
    // 需要准备的宫格数据
    constructor(props){
        super(props)
        this.headerData =  []
        for(let i = 0; i < 20; i++){
            this.headerData.push({
                text: '头像' + (i+1),
                icon: require(`../../assets/images/header_images/头像${i+1}.png`) // commonjs动态导入,不能使用import
            })
        }
    }

    static propTypes = {
        setHeader: PropTypes.func.isRequired
      }

    state = {
        icon: null // 是否选择了icon
    }
    // 点击头像
    handleClick = ({text, icon}) => {
        // 更新当前组件状态
        this.setState({icon})
        // 调用函数更新父组件状态
        this.props.setHeader(text)
      }
    render(){
         // 头部界面
        const {icon} = this.state
        const listHeader = !icon ? '请选择头像' : (
        <div>
            已选择头像:<img src={icon} alt="头像"/>
        </div>
        )
        
        return (
                <List renderHeader = {()=> listHeader}>
                    <Grid data={this.headerData} columnNum={5} 
                    onClick={this.handleClick}/>
                </List>
        )
    }
}

