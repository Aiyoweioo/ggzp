// 主界面路由组件

import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Switch, Route} from 'react-router-dom'
import LaobanInfo from '../laoban-info/laoban-info'
import DashenInfo from '../dashen-info/dashen-info'
class Main extends Component {
    render() {
        // 检查用户是否登录，如果没有，则自动重定向到登录界面
        const  {user} = this.props
        if(!user._id){
            this.props.history.replace('/login')
        }
        return (
            <div>
                <Switch>
                    <Route path='/laobaninfo' component={LaobanInfo} />
                    <Route path='/dasheninfo' component={DashenInfo} />
                </Switch>
            </div>
        )
    }
}

export default connect(
    state => ({user: state.user})
)(Main)