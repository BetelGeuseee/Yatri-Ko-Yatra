import React from 'react'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import './App.css';
import Home from './pages/Home';
import Agencies from './components/Agencies';
import NavBar from './components/NavBar';

function App() {
  return (
     <>
       <Router>
          <NavBar/>
             <Routes>
                 <Route path='/' exact element={<Home/>}/>
             </Routes>
           
       </Router>
     </>
  );
}

export default App;
