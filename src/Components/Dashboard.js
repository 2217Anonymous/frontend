import { Outlet ,Link } from 'react-router-dom'
import React from 'react'

export default function Dashboard() {
  return (
    <div className='container'>
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <Link style={{color:'white'}} className="nav-link" to="expenses/">Expenses</Link>
                    </li>
                    <li className="nav-item">
                        <Link style={{color:'white'}} className="nav-link" to="invoices/">invoices</Link>
                    </li>
                </ul>
        </nav>
        <div className="col-md-4">
        <Outlet/>
        </div>
    </div>
  )
}

  