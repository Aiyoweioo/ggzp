// 主界面路由组件

import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Switch, Route} from 'react-router-dom'
import LaobanInfo from '../laoban-info/laoban-info'
import DashenInfo from '../dashen-info/dashen-info'
 class Main extends Component {
    render() {
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
    state => ({})
)(Main)