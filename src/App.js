import React, { Component } from 'react'
import Header from './components/Header'
import {HashRouter as Router,Route,Switch,Redirect} from 'react-router-dom'
import Home from './container/Home'
import Api from './container/Api'
import Start from './container/Start'
import About from './container/About'
import Login from './container/Login'
// import Sider from './Home/Sider'
import My from './file/My'

export default class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Header/>
                    <div className="main">
                        <div className="content">
                            <Switch>
                                <Route path='/home' component={Home}/>
                                <Route path='/api' component={Api}/>
                                <Route path='/start' component={Start}/>
                                <Route path='/about' component={About}/>
                                <Route path='/login' component={Login}/>
                                <Route path='/all/details/:page/:idx' component={My}/>
                                <Route path='/ask/details/:page/:idx' component={My}/>
                                <Route path='/good/details/:page/:idx' component={My}/>
                                <Route path='/job/details/:page/:idx' component={My}/>
                                <Route path='/share/details/:page/:idx' component={My}/>
                                <Redirect from='/*' to = '/home'/>
                            </Switch>
                        </div>
                        <div className="sider">
                            <div id='sider1'></div>
                            {/* <div id='sider2'></div>
                            <div id='sider3'></div> */}
                        </div>
                    </div>
                </div>
            </Router>
        )
    }
}