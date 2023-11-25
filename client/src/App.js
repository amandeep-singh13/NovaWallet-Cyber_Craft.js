import React, { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom'
import HomePage from './pages/HomePage';
import Register from './pages/Register';
import Login from './pages/Login';
import Features from './pages/Features';
import Transactions from './pages/Transactions';
import ContactUsPage from './pages/ContactUsPage'; 
import FAQPage from './pages/FAQPage';
import Bill from './pages/Bill'
import AddBillForm from './pages/AddBill';
import Dashboard from './pages/DashBoard';
import {ThemeProvider} from './context/themeContext'
function App() {
  const [bills,setBills] = useState([]);
  const handleAddBill = (newBill) => {
    setBills([...bills,{id: bills.length+1, ...newBill}])
  }
  return (
    <>
      <Routes>
      <Route path="/Bills" element={<ProtectedRoutes><ThemeProvider><BillList bills={bills} /></ThemeProvider></ProtectedRoutes>} />
      <Route
        path="/AddBill"
        element={<ProtectedRoutes><ThemeProvider><AddBillForm onAddBill={handleAddBill} /></ThemeProvider></ProtectedRoutes>}
      />
        
        
        <Route path="/Bill" element ={<ProtectedRoutes><ThemeProvider><Bill/></ThemeProvider></ProtectedRoutes>}></Route>

        <Route
          path='/'
          element={
           <ThemeProvider><HomePage /></ThemeProvider> 
          } />
          <Route
          path='/features'
          element={
            <ProtectedRoutes>
            <ThemeProvider>
            <Features />
            </ThemeProvider>
            </ProtectedRoutes>
          } />
          <Route 
          path = '/transactions' 
          element={
            <ProtectedRoutes><ThemeProvider><Transactions/></ThemeProvider></ProtectedRoutes>
            
          }/>
        <Route path="/dashboard" element={<ProtectedRoutes><ThemeProvider><Dashboard/></ThemeProvider></ProtectedRoutes>}/>
        <Route path='/register' element={<ThemeProvider><Register /></ThemeProvider>} />
        <Route path='/login' element={<ThemeProvider><Login/></ThemeProvider>} />
        <Route path='/contact' element={<ThemeProvider><ContactUsPage/></ThemeProvider>} /> 
        <Route path='/faq' element={<ThemeProvider><FAQPage/></ThemeProvider>} />
      </Routes>
    </>
  );
}
export function ProtectedRoutes(props) {
  if (localStorage.getItem("user")) {
    return props.children;
  } else {
    return <Navigate to="/login" />;
  }
}
function BillList({ bills }) {
  return (
    <div>
      <h1>Bill List</h1>
      {bills.map((bill) => (
        <Bill key={bill.id} bill={bill} />
      ))}
    </div>
  );
}


export default App;
