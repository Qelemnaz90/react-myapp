import './App.css';
import Contact from './components/Contact/Contact'
import About from './components/About/About'
import Home from './Home/Home';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'



function App() {
  return (
    <Router>
        <div className="App"></div>
            <Routes>
              <Route path = "/about" element={<About/>}   />
              <Route path = "/contact" element={<Contact/>}   />
              <Route path = "/" element={<Home/>}   />
            </Routes> 
    </Router>


  );
}

export default App;
