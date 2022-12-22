import React from 'react'
import { Link,Outlet } from 'react-router-dom'
import {getUsers} from './myUsers'

export default function Invoices() {
    const users = getUsers()
  return (
    <div className='container mt-5' style={{display:'flex'}}>
        <ul className="list-group">
        <li className="list-group-item active">Invoice List</li>
            {users.map((dt) => (
                    <Link className="list-group-item list-group-item-action" to={`/invoices/${dt.id}`} key={dt.id}> {dt.id} - {dt.name}</Link>
                ))}
        </ul>  
        <div className="ml-5" style={{marginRight:'10px,'}}>
            <Outlet/>
        </div>  
    </div>
  )
}
