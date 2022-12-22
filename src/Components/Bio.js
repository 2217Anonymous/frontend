import React,{ useState } from 'react'
import { Button } from 'react-bootstrap'

export default function Bio() {

  const [age,setAge] = useState(1)

  const addAge = () => {
    setAge(age+1)
  }
  const deleteAge = () => {
    age < 1 ? setAge(0) : setAge(age-1)
  }
  return (
    <>
        <div className='container mt-5'>
          <h3>My age : {age} </h3>
          <Button variant='primary' onClick={addAge}> Age +</Button>{ ' '}
          <Button variant='danger' onClick={deleteAge}> Age -</Button>{' '}
        </div>
    </>
  )
}
