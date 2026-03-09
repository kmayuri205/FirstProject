import logo from './logo.svg';
import {BrowserRouter,Routes,Route,Link} from "react-router-dom"
import './App.css';
import Navbar from './component/navbar/Navbar';
import Home from './component/maindata/home/Home';
import AboutUs from './component/maindata/aboutus/AboutUs'; 
import Contact from './component/maindata/contact/Contact'; 
import New from './component/maindata/new/New'; 
// import  Login from './component/maindata/login/Login'; 



function App() {
  return (


     <BrowserRouter>
      <Navbar>
         <Link to="/">Home</Link>
        <Link to="/aboutus">AboutUs</Link>
         <Link to="/contact">Contact</Link>
        <Link to="/new">New</Link>
      </Navbar>

      <div style={{ marginTop: '50px' }}></div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/new" element={<New />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}



export default App;



