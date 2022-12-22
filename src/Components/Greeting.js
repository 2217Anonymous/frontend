import React from 'react'
import GustGreeting from './GustGreeting'
import UserGreeting from './UserGreeting'

export default function Greeting(props) {
    const isLogedIn = props.isLogedIn

    return (
        <>
            { 
                isLogedIn ? (
                    <div className='container'>
                        <h1>
                            <UserGreeting></UserGreeting>
                        </h1>
                    </div>):(<div className='container'>
                                <h1>
                                    <GustGreeting></GustGreeting>
                                </h1>
                            </div>)
            }
        </>   
    )    
}
