import React, { useState } from 'react'
import GustGreeting from './GustGreeting'

export default function Form(props) {
    const isLogedIn = props.isLogedIn
    const [email,setEmail] = useState("")
    const [submit,setSubmit] = useState("")

    const emailTxt = (event) => {
        setEmail(event.target.value)
    }
    const formSubmit = (event) => {
        setSubmit(email)
        event.preventDefault()
    }
  return (
    <>
        {
        isLogedIn ? (
        <div className='container'>
            <form onSubmit={formSubmit}>
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Email address {submit}</label>
                    <input type="text" value={email} onChange={emailTxt} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    <div id="emailHelp" className="form-text">{email}</div>
                </div>
                <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" />
                </div>
                <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                    <label className="form-check-label" for="exampleCheck1">Check me out</label>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
        ) : (" Please Login ")
        }
    </>
  )
}
