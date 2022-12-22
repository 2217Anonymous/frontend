import React,{useState} from "react";
import { Button } from "react-bootstrap";
import Navigation from "./Navigation";

export default function Timer() {
    const [count,setCount] = useState(0)
    const [timer,setTimer] = useState({date : new Date()})

    const addCount = () => setCount(count + 1)
    const deleteCount = () => setCount(count - 1)
    const resetCount = () => setCount({count:null}) 
  return (
    <>
      <div className="container mt-5">
        <h1>Welcome to Anonymous World</h1>
        <h2 className="mb-3">persons : {count}</h2>
        <Button onClick={deleteCount} variant="danger">Delete Count -</Button>{' '}
        <Button onClick={addCount} variant="primary">Add Count +</Button>{' '}
        <Button onClick={resetCount} variant="danger">Reset</Button>
        <p>{timer.date.toLocaleTimeString()}</p>
      </div>
    </>
  )
}
