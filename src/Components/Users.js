import React from 'react'
import { getUsers } from './myUsers'

export default function Users() {
    const users = getUsers()
  return (
    <div className='container mt-5'>
      <ul className="list-group">
        {users.map((dt) => (
            <div key={dt.id}>
                <li className='list-group-item active'>Name : {dt.name}</li>
                <li className='list-group-item'>Username : {dt.username}</li>
                <li className='list-group-item'>Email : {dt.email}</li>
                <div className='row mt-3 mb-5'>
                    <div className='col-md-3'>
                        <div className="card" style={{width: '18rem'}}>
                            <div className="bg-warning card-header active">
                                Address
                            </div>
                            <div className="list-group list-group-flush">
                                <p className='list-group-item'>City : {dt.address.city}</p>
                                <p className='list-group-item'>Street : {dt.address.street}</p>
                                <p className='list-group-item'>Suite : {dt.address.suite}</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-3'>
                        <div className="card" style={{width: '18rem'}}>
                            <div className="bg-warning card-header active">
                                Geo Location
                            </div>
                            <div className="list-group list-group-flush">
                                <p className='list-group-item'>Zipcode : {dt.address.zipcode}</p>
                                <p className='list-group-item'>Latditute : {dt.address.geo.lat}</p>
                                <p className='list-group-item'>Longditude : {dt.address.geo.lan}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        ))}
  {/* <li class="list-group-item active" aria-current="true">An active item</li>
  <li class="list-group-item">A second item</li>
  <li class="list-group-item">A third item</li>
  <li class="list-group-item">A fourth item</li>
  <li class="list-group-item">And a fifth one</li> */}
</ul>
    </div>
  )
}
