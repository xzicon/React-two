import React from 'react'
import './login.css'

export default function Login(props){
    function login(){
        props.history.push('/');
    }
    return (
        <div className="login">
            <p className="login1">用户名：<input type="text"/></p>
            <p className="login2">密码：<input type="password"/></p>
            <button onClick={login} id='btn1'>登陆</button>
            <button onClick={login} id='btn2'>通过GitHub登录</button>
            <a id='pwd'>忘记密码了？</a>
        </div>
    )
}