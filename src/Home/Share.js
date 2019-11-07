import React, { Component} from 'react'
import { HashRouter as Router,Route,Switch,Redirect} from 'react-router-dom';
import Sider from '../file/Sider'
import Topic from '../file/Topic'

export default class Share extends Component {
    render() {
        return (
            <Router>     
                <div>
                    <Switch>
                        <Route path='/home/share/:page' component={Topic}/>
                        <Redirect from='/*' to = '/home/share/1'/>
                    </Switch>
                    <Sider types='share'/>
                </div>
            </Router>
        )
    }
}

