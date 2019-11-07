import React, { Component} from 'react'
import { HashRouter as Router,Route,Switch,Redirect} from 'react-router-dom';
import Sider from '../file/Sider'
import Topic from '../file/Topic'

export default class Ask extends Component {
    render() {
        return (
            <Router>     
                <div>
                    <Switch>
                        <Route path='/home/ask/:page' component={Topic}/>
                        <Redirect from='/*' to = '/home/ask/1'/>
                    </Switch>
                    <Sider types='ask'/>
                </div>
            </Router>
        )
    }
}
