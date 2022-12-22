import React from 'react'
import {Button} from 'react-bootstrap'

export const LoginButton = (props) => <Button variant='primary' onClick={props.onClick}>Login</Button>


export const LogOutButton = (props) => <Button variant='danger' onClick={props.onClick}>Logout</Button>
