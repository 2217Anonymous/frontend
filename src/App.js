import './App.css';
import Bio from './Components/Bio';
import { LoginButton, LogOutButton } from './Components/Button';
import Form from './Components/Form';
import Greeting from './Components/Greeting';
import LoginController from './Components/LoginController';
import Timer from './Components/Timer';
import Users from './Components/Users';
import { BrowserRouter,Routes ,Route,Outlet, Link } from 'react-router-dom';
import Home from './Components/Home';
import Products from './myComponents/Products';
import Dashboard from './myComponents/Dashboard';
import Protected from './myComponents/Protected';
import { useState } from 'react';
import Menubar from './myComponents/Menubar';

function App() {
  const [isLogin,setIsLogin] = useState(null) 

  const login = () => {
    setIsLogin(true)
  }

  const logout = () => {
    setIsLogin(false)
  }

  return (  
      <>
      <div className='container mt-5'>
      <h2 className='text-center mb-5'>Reat Protected Route Example</h2>
        <BrowserRouter>
        <Menubar />
          <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route 
            path="/products" 
            element={
              <Protected isLogin={isLogin}>
                 <Products/>
              </Protected>
            } />
            <Route 
            path="/dashboard" 
            element={
              <Protected isLogin={isLogin}>
                <Dashboard/>
                </Protected>
            } />
          </Routes>
          { 
            isLogin ? (<button className="btn btn-sm btn-danger"  onClick={logout}>Logout</button>) : <button className="btn btn-sm btn-primary" onClick={login}>Login</button>
          }
        </BrowserRouter>  
        

        
        
        {/* <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <Link style={{color:'white'}} className="nav-link" to="expenses/">Expenses</Link>
                    </li>
                    <li className="nav-item">
                        <Link style={{color:'white'}} className="nav-link" to="invoices/">invoices</Link>
                    </li>
                </ul>
        </nav>
          <Outlet/> */} 
    </div>
      </>  
  );
}

export default App;
