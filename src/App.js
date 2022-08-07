import React from 'react'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import './App.css';
import Home from './pages/Home';

import NavBar from './components/NavBar';
import Blogs from './pages/Blogs';
import SignUp from './pages/SignUp';
import Agencies from './pages/Agencies';

function App() {
  return (
     <>
       <Router>
          <NavBar/>
             <Routes>
                 <Route path='/' exact element={<Home/>}/>
                 <Route path='/blogs' element={<Blogs/>} />
                 <Route path='/agencies' element={<Agencies/>} />
                 <Route path='/signup' element={<SignUp/>} />
             </Routes>
           
       </Router>
     </>
  );
}

export default App;
