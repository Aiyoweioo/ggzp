// 主界面路由组件

import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Switch, Route, Redirect} from 'react-router-dom'
import LaobanInfo from '../laoban-info/laoban-info'
import DashenInfo from '../dashen-info/dashen-info'
import Cookies from 'js-cookie' // 可以操作前端cookie的对象set
import { getRedirectTo } from '../../utils'
import {getUser} from '../../redux/actions'
import Dashen from '../dashen/dashen'
import Laoban from '../laoban/laoban'
import Message from '../message/message'
import Personal from "../personal/personal"
import NotFound from '../../components/not-found/not-found'
import { NavBar } from 'antd-mobile'
import NavFooter from '../../components/nav-footer/nav-footer'
import '../../assets/css/style.less'
/* 
1.实现自动登录
componentDidMount()
    1.1 若登陆过但（cookie有userid），但还没有登录，发请求获取对应的user
render()
    1.2 若cookie没有userid， 跳转到login界面
    1.3 判断redux管理的user中是否有_id, 如果没有， 暂时不做显示
    1.4 判断redux管理的user中是否有_id，有， 说明已经登录， 显示对应的界面
    1.5如果已经登录， 如果请求根路径
    根据type和header计算出一个重定向的路由路径， 自动重定向（强制完善信息）
*/
class Main extends Component {
    componentDidMount(){
        // 若登陆过但（cookie有userid），但还没有登录，发请求获取对应的user
        // 读取cookie的userid
        const userid = Cookies.get('userid')
        const {_id} = this.props.user
        if(userid && !_id){
            // 发送异步请求， 获取user
            this.props.getUser()
        }

    }

    // 给组件对象添加属性，每个组件的相关信息
    navList = [
        {
            path:'/laoban', // 路由路径
            component: Laoban, // 组件名称
            title: '大神列表', // 顶部标题 登录为老板但看的是大神信息
            icon:'dashen', // 图标名称
            text: '大神' // 组件文字
        },
        {
            path:'/dashen', // 路由路径
            component: Dashen, // 组件名称
            title: '老板列表', // 顶部标题
            icon:'laoban', // 图标名称
            text: '老板' // 组件文字
        },
        {
            path:'/message', // 路由路径
            component: Message, // 组件名称
            title: '消息列表', // 顶部标题
            icon:'message', // 图标名称
            text: '消息' // 组件文字
        },
        {
            path:'/personal', // 路由路径
            component: Personal, // 组件名称
            title: '用户中心', // 顶部标题
            icon:'personal', // 图标名称
            text: '个人' // 组件文字
        },

    ]
    render() {
        // 读取cookie的userid
        const userid = Cookies.get('userid')
        if(!userid){
            return <Redirect to='/login' />
        }
        // 如果有，读取redux的user状态
        const {user} = this.props
        if(!user._id){
            // 如果redux没有_id，返回null
            return null
        }else{
            // redux有_id(就说明已经登录),就显示对应的界面
            // 根据type和header计算出一个重定向的路由路径， 自动重定向（强制完善信息）
            let path = this.props.location.pathname
            if(path === '/'){
                // 得到一个重定向的路由路径
                path = getRedirectTo(user.type, user.header)
                return <Redirect to={path} />
            }
        }
        const {navList} = this
        const path = this.props.location.pathname // 请求的路径
        const currentNav = navList.find(nav => nav.path === path) // 得到当前的nav, 可能没有
        if(currentNav){
            // 如果有值，决定哪个路由隐藏 laoban/dashen
            if(user.type === 'laoban'){
                // 隐藏数组的第二个
                navList[1].hide = true
            }else{
                navList[0].hide = true
            }

        }
            
        
        /*// 检查用户是否登录，如果没有，则自动重定向到登录界面
        const  {user} = this.props
        if(!user._id){
            <Redirect to='/login'/>
        }
        */
        return (
            <div>
                {currentNav ? <NavBar className='sticky-header'>{currentNav.title}</NavBar> : null }
                <Switch>
                    {
                        navList.map(nav => <Route path={nav.path} component={nav.component} key={nav.path}/>)
                    }
                    <Route path='/laobaninfo' component={LaobanInfo} />
                    <Route path='/dasheninfo' component={DashenInfo} />
                    <Route component={NotFound} />
                </Switch>
                {currentNav ? <NavFooter navList={navList}/> : null}
            </div>
        )
    }
}


export default connect(
    state => ({user: state.user}),
    {getUser}
)(Main)