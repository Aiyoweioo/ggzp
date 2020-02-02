// 底部导航的UI路由组件

import React, {Component} from 'react'
import {TabBar} from 'antd-mobile'
import PropTypes from "prop-types"
import {withRouter} from 'react-router-dom'
// 希望在非路由组中使用路由库的api
// withRouter

class NavFooter extends Component {
    static propTypes = {
        navList: PropTypes.array.isRequired
    }
    render() {
        let {navList} = this.props
        navList = navList.filter(nav => !nav.hide) // 留下nav.hide为false的数组元素,显示过滤后的结果
        const path = this.props.location.pathname // 原来不可使用，只有路由组件才有location属性，调用withRouter才可
        return (
            <TabBar tabBarPosition='bottom' className='am-tab-bar'>
                {
                    navList.map(nav => <TabBar.Item
                        key={nav.path}
                        title={nav.text}
                        icon={{uri: require(`../../assets/images/nav-footer_images/${nav.icon}.png`)}}
                        selectedIcon={{uri: require(`../../assets/images/nav-footer_images/${nav.icon}-selected.png`)}}
                        selected={path===nav.path}
                        onPress={() =>this.props.history.replace(nav.path)}

                    ></TabBar.Item>)
                }
            </TabBar>
        )
    }
}

export default withRouter(NavFooter)