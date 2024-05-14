// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Component/Navbar';
import Home from './pages/Home';
import Blog from './pages/Blog';
import Store from './pages/Store';
import  BackgroundImage from './pages/assets/mainbgimg.png';





function App() {
  return (
    <Router>
    <div className="bg-cover" style={{ backgroundImage: `url(${BackgroundImage})` }}>
      
  <Navbar />
<Home />
<Routes>
  <Route path= "./" element={<Home/>} />
  <Route path="./store" element={<Store />}/>
  <Route path='./blog' element = {<Blog />} /> 
</Routes>

 
    </div>
    </Router>
  );
}

export default App;
