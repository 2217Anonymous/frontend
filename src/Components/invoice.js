import React from 'react'
import { useParams,Link } from 'react-router-dom'

export default function Invoice() {
    const params = useParams()
  return (
    <div className="card" style={{width: '18rem'}}>
        <div class="card-body">
            <h5 class="card-title">Invoice : {params.invoiceId}</h5>
        </div>
    </div>
    
  )
}
