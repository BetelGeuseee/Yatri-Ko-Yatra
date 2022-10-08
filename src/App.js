import React from 'react'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import './App.css';
import {Home} from './pages/Home';
import fire from './fire';
import NavBar from './components/NavBar';
import Blogs from './pages/Blogs';
import SignUp from './pages/SignUp'; 
import Agencies from './pages/Agencies';
import RegisterTraveller from './pages/RegisterTraveller';
import Registration from './pages/Registration';
import SignIn from './pages/SignIn';
import CreateBlog from './pages/CreateBlog';


function App() {

  return (
     <>
       <Router>
           
            <NavBar/>
                 <Routes>
                 <Route path='/' exact element={<Home/>}/>
                 <Route path='/blogs' element={<Blogs/>} />
                 <Route path='/agencies' element={<Agencies/>} />
                 <Route path = '/register' element = {<Registration/>} />
                 <Route path = '/registertraveller' element = {<RegisterTraveller/>} />
                 <Route path = '/signin' element = {<SignIn/>} />
                 <Route path= '/create-blog' element = {<CreateBlog/>}/>
             </Routes>
       </Router>
     </>
  );
}

export default App;
/*<Route path='/signup' element={<SignUp/>} /> */