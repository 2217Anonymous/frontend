import React from 'react'
import { Navigate } from 'react-router-dom'

export default function Protected({isLogin,children}) {
    if(!isLogin){
        return <Navigate to='/' replace></Navigate>
    }
    return children
    // props.isLogin ? <Navigate to='/' replace></Navigate> : Children 
}
