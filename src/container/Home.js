import React, { Component } from 'react'
import {Route,NavLink,Switch,Redirect} from 'react-router-dom'
import All from '../Home/All'
import Good from '../Home/Good'
import Share from '../Home/Share'
import Ask from '../Home/Ask'
import Job from '../Home/Job'


export default class Home extends Component {
    render() {
        //跳到组件的那个路径
        let url = this.props.match.url
        return (
            <div>
                {/* 也可以写成几个按钮，写在同一个个组件里面 */}
                <div className="home-top">
                    <NavLink activeStyle={{background:'#80bd01',color:'#fff',borderRadius:'3px',padding:'3px 4px'}} to={url+"/all"}>全部</NavLink>
                    <NavLink activeStyle={{background:'#80bd01',color:'#fff',borderRadius:'3px',padding:'3px 4px'}} to={url+"/good"}>精华</NavLink>
                    <NavLink activeStyle={{background:'#80bd01',color:'#fff',borderRadius:'3px',padding:'3px 4px'}} to={url+"/share"}>分享</NavLink>
                    <NavLink activeStyle={{background:'#80bd01',color:'#fff',borderRadius:'3px',padding:'3px 4px'}} to={url+"/ask"}>问答</NavLink>
                    <NavLink activeStyle={{background:'#80bd01',color:'#fff',borderRadius:'3px',padding:'3px 4px'}} to={url+"/job"}>招聘</NavLink>
                </div>
                <div className="home-list">
                    <Switch>
                        <Route path={`${url}/all`} component={All}/>
                        <Route path={`${url}/good`} component={Good}/>
                        <Route path={`${url}/share`} component={Share}/>
                        <Route path={`${url}/ask`} component={Ask}/>
                        <Route path={`${url}/job`} component={Job}/>
                        <Redirect from='/*' to ={`${url}/all`}/>
                    </Switch>
                </div>
                
            </div>
        )
    }
}