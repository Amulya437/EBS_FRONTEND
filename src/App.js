import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import Register from './components/customer/register';
import Login from './components/Login/login'; 
import Home from './components/Home';
import Navbar from './components/navbar/navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import CustomerDashboard from './components/customer/customerDashboard';
import AdminDashboard from './components/admin/adminDashboard';
 
function App() {
  return (
    <div className="App">
     
      <Navbar/>
      
         <Routes>
         <Route path='/' element = {<Home/>}/>
          <Route path='/login' element = {<Login/>}/>
          <Route path='/register' element = {<Register/>}/>
          <Route path='/aboutus' element = {<AboutUs/>}/>
          <Route path='/contactus' element = {<ContactUs/>}/>
          <Route path='/CustomerDashboard' element = {<CustomerDashboard/>}/>
          <Route path='/AdminDashboard' element = {<AdminDashboard/>}/>
          
        </Routes> 
       

    

    </div>
  );
}

export default App;
