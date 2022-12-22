import React, { Component } from 'react'
import { LoginButton, LogOutButton } from './Button'
import Form from './Form';
import Greeting from './Greeting';

export default class LoginController extends Component {
    constructor(props){
        super(props)
        this.state = {
            isLogIn : false
        }
        this.logout = this.logout.bind(this)
        this.login = this.login.bind(this)
    }
 
    login(){
        this.setState({isLogIn:true})
    }

    logout(){
        this.setState({isLogIn:false})
    }

  render() {
    const isLogedIn = this.state.isLogIn
    let button;
    if(isLogedIn) {
        button = <LogOutButton onClick={this.logout} ></LogOutButton>
    } else{
        button = <LoginButton onClick={this.login} ></LoginButton>
    }
    return (
      <div className='container mb-5'> 
        <h1>{isLogedIn}</h1>
        {button}
        <Greeting isLogedIn = {isLogedIn}></Greeting>
        <Form isLogedIn = {isLogedIn}></Form>
        
      </div>
    )
  }
}
