import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Invoice from './Components/invoice';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Expenses from './Components/Expenses';
import Invoices from './Components/Invoices';
import Dashboard from './Components/Dashboard';
import DashboardMessages from './Components/DashboardMessages';
import DashboardTasks from './Components/DashboardTasks';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <App/>
  {/* <BrowserRouter>
    <Routes>
      <Route path="/" element={<App/>}>
        <Route path="expenses" element={<Expenses></Expenses>}></Route>
        <Route path="invoices" element={<Invoices />}>
          <Route path=":invoiceId" element={<Invoice />}></Route>
        </Route>
        <Route path="*" element={<main style={{padding:'1rem'}}>
        <h1 className='text-light text-uppercase text-center'>There's a nothing here! <br/> 404 Page</h1>
        </main>}></Route>
      </Route>
      <Route path="Dashboard/" element={<Dashboard/>}>
        <Route path="messages" element={<DashboardMessages />}/>
        <Route path="tasks" element={<DashboardTasks />} />
      </Route>
    </Routes>
  </BrowserRouter> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
