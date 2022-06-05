import { Route, Routes } from 'react-router-dom';
import './App.css';
import BusinessSummery from './Components/BusinessSummery/BusinessSummery';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import Signup from './Components/Signup/Signup';
import Footer from './Shared/Footer/Footer';
import Header from './Shared/Header/Header';


function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Home></Home>} />
        <Route path='/summery' element={<BusinessSummery></BusinessSummery>} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
      </Routes>
      <Footer />
    </div>
  );
}


export default App;
