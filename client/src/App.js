import { Routes, Route, Navigate } from 'react-router-dom'
import HomePage from './pages/HomePage';
import Register from './pages/Register';
import Login from './pages/Login';
import Features from './pages/Features';
import Transactions from './pages/Transactions';
function App() {
  const [bills,setBills] = useState([]);
  const handleAddBill = (newBill) => {
    setBills([...bills,{id: bills.length+1, ...newBill}])
  }
  return (
    <>
      <Routes>
      <Route path="/Bills" element={<BillList bills={bills} />} />
      <Route
        path="/AddBill"
        element={<AddBillForm onAddBill={handleAddBill} />}
      />
        
        
        <Route path="/Bill" element ={<Bill/>}></Route>

        <Route
          path='/'
          element={
            <HomePage />
          } />
          <Route
          path='/features'
          element={<ProtectedRoutes>
            <Features />
          </ProtectedRoutes>
          } />
          <Route 
          path = '/transactions' 
          element={<ProtectedRoutes>
            <Transactions/>
          </ProtectedRoutes>}/>
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
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



export default App;
