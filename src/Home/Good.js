import React, { Component} from 'react'
import { HashRouter as Router,Route,Switch,Redirect} from 'react-router-dom';
import Sider from '../file/Sider'
import Topic from '../file/Topic'

export default class Good extends Component {
    render() {
        return (
            <Router>     
                <div>
                    <Switch>
                        <Route path='/home/good/:page' component={Topic}/>
                        <Redirect from='/*' to = '/home/good/1'/>
                    </Switch>
                    <Sider types='good'/>
                </div>
            </Router>
        )
    }
}

