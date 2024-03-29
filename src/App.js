import React, { useEffect } from 'react'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import './App.css';
import {Home} from './pages/Home';
import NavBar from './components/NavBar';
import Blogs from './pages/Blogs';
import SignUp from './pages/SignUp'; 
import Agencies from './pages/Agencies';
import RegisterTraveller from './pages/RegisterTraveller';
import Registration from './pages/Registration';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from './fire';
import SignIn from './pages/SignIn';
import CreateBlog from './pages/CreateBlog';
import ViewBlog from './pages/ViewBlog';
import AgencyProfile from './pages/AgencyProfile';
import ViewPackageDetail from './pages/ViewPackageDetail';
import ShowMap from './pages/ShowMap';



function App() {
 
  const [user,loading,error] = useAuthState(auth);

 //console.log(user.uid);
 

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
                 <Route path = '/view-blog/:id' element = {<ViewBlog/>} />
                 <Route path= '/create-blog' element = {<CreateBlog userId={user}/>}/>
                 <Route path='/agency-profile/:id' element = {<AgencyProfile userId ={user}/>} />
                 <Route path='/show-map/:loc' element = {<ShowMap/>} />
                 <Route path = '/view-package-detail/:aid/:id' element = {<ViewPackageDetail/>} />
             </Routes>
       </Router>
     </>
  );
}

export default App;
/*<Route path='/signup' element={<SignUp/>} /> */