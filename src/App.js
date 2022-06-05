import { Route, Routes } from 'react-router-dom';
import './App.css';
import BusinessSummery from './Components/BusinessSummery/BusinessSummery';
import Home from './Components/Home/Home';
import Inventory from './Components/Inventory/Inventory';
import Login from './Components/Login/Login';
import Orders from './Components/Orders/Orders';
import Shop from './Components/Shop/Shop';
import Signup from './Components/Signup/Signup';
import Footer from './Shared/Footer/Footer';
import Header from './Shared/Header/Header';


function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Home></Home>} />
        <Route path='/home' element={<Home></Home>} />
        <Route path='/summery' element={<BusinessSummery></BusinessSummery>} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/orders' element={<Orders />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='/inventory' element={<Inventory />} />
      </Routes>
      <Footer />
    </div>
  );
}


export default App;
