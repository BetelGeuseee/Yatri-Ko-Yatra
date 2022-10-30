import React,{useState,useEffect} from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';
import './components_css/NavBar.css'
import { auth } from '../fire';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
const NavBar = ()=>{
 const[click,setClick] = useState(false);
 const [button,setButton] = useState(true);
 const [userid,setUserId] = useState(null);
 const [usernameExist,setUsernameExist] = useState(false);
 const [traveller,setTraveller] = useState('');
 const navigate = useNavigate();
 const handleClick = ()=> {
    setClick(!click);
 }
 
 const closeMobileMenu = ()=>{
         setClick(false);
 }
 const showButton = ()=>{
  if(window.innerWidth <= 960){
    setButton(false);
  }else{
    setButton(true);
  }
 };
 
 useEffect(()=>{
  showButton();
  setInterval(()=>{
    setUserId(auth.currentUser.uid);
    if(!userid){
      setUsernameExist(true);
      setButton(false);
     
  
    }else{
      setUsernameExist(false);
    }
  },2000)
     
 },[])
 window.addEventListener('resize',showButton);
 function logOut(){
  signOut(auth).then(() => {
    navigate('/signin')
    window.location.reload(false);
 }).catch((error) => {
   alert('Could not signOut right now. Try again later!!!')
 });
 }
 
return (
  <>
    <nav className='navbar'> 
       <div className='navbar-container'>
            <Link to='/' className='navbar-logo' onClick={closeMobileMenu} >YKY <i class="fa-solid fa-plane-departure"></i>
            </Link>
       
       <div className='menu-icon' onClick={handleClick}>
           <i className={click ? 'fas fa-times' : 'fas fa-bars'}/>
           </div>
       <ul className = {click ? 'nav-menu active' : 'nav-menu'}>
           <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
           </li>
           <li className='nav-item'>
              <Link to='/agencies' className='nav-links' onClick={closeMobileMenu}>
               Agencies
              </Link>
           </li>
           <li className='nav-item'>
              <Link to='/blogs' className='nav-links' onClick={closeMobileMenu}>
                Blogs
              </Link>
           </li>
           <li>
              <Link to='/register' className='nav-links-mobile' onClick={closeMobileMenu}> Sign Up
              </Link>
           </li>
       </ul>
        {button && <Button buttonStyle='btn--outline'>Sign Up</Button>}
        {usernameExist && <button type='button' className='logout-button' onClick={logOut}> Log Out</button>}
       </div>
    </nav>
  </>
)
}


export default NavBar;