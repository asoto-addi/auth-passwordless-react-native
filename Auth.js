import React, { Component } from 'react'
import Auth0 from 'react-native-auth0'


class Auth extends Component {
    constructor(){
        super()
        this.state={
            phone:'',
            code:'',
            codeRequestSend:false,
            LogginIn:false,
            isLoggedin:false, 
            accessToken:'', 
            idToken:''
        }

        this.loginUser = this.loginUser.bind(this)
        this.getLoginCode = this.getLoginCode.bind(this)
    }
}