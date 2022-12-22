import React from 'react'
import { Button } from 'react-bootstrap';


export default class Navigation extends React.Component{   
    constructor(props){
        super(props)
        this.state = {
            count : 0,
            age : this.props.dt.age,
        }
        
        this.btnFour = this.btnFour.bind(this)
        this.btnThree = this.btnThree.bind(this)
    }

    btnOne = () => {
        this.setState({
            age : this.state.age + 1 
        })
    }

    btnThree(){
        this.setState({
            age : this.state.age - 1 
        })
    }

    btnTwo = (e) => {
        (this.state.count <= 0) ? this.setState({count: 0}):this.setState({count:this.state.count-1})
    }

    btnFour() {
        this.setState({
            count : this.state.count + 1 
        })
    }

    render(){
        return(
            <>
                <div className='container mt-5'>
                    <h1>
                        {
                            this.state.age
                        }
                    </h1>
                    <h2>
                        Button Press Count : 
                        {
                        this.state.count
                        }
                    </h2> 
                    <Button variant={this.state.age <= 18 ? 'default' : 'primary'} onClick={() => this.btnOne()}>Age <span> + </span></Button>{' '} 
                    <Button variant={this.state.age <= 18 ? 'default' : 'success'} onClick={this.btnThree}>Age <span> - </span></Button>{' '}
                    <Button variant={this.state.age <= 18 ? 'default' : 'warning'} onClick={this.btnFour}> + </Button>{' '}
                    <Button variant={this.state.age <= 18 ? 'default' : 'danger' } onClick={this.btnTwo}> - </Button>{' '}
                </div>   
            </>
            
        )
    }
}