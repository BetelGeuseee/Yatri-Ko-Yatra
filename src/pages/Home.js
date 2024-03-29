import React, { useEffect, useState } from 'react'
import '../App.css'
import HeroSection from '../components/HeroSection'
import { useNavigate } from "react-router-dom";
import Cards from '../components/Cards'
import Footer from '../components/Footer'
import { auth } from "../fire";
import { signOut } from 'firebase/auth';
import { onAuthStateChanged } from 'firebase/auth';
var isLoggedIn = false;
const Home =()=>{
  const navigate = useNavigate();
  const [userStatus,changeUserStatus] = useState(false);
 /* fire.auth().onAuthStateChanged((user) => {
    if (user) {
    
      console.log(user.uid);
      // ...
    } else {
      console.log('shirhska');
    } 
  }); */
  useEffect(()=>{
    onAuthStateChanged(auth,(user)=>{

      
      if(user){
       
         changeUserStatus(true);
         isLoggedIn=true;
  
      }else{
       
         changeUserStatus(false);
         isLoggedIn=false;
      }
    })
  },[])


  const handleLogOut = () =>{
    signOut(auth).then(() => {
       navigate('/signin')
       window.location.reload(false);
    }).catch((error) => {
      alert('Could not signOut right now. Try again later!!!')
    });
    }
   
    return(<>
      <HeroSection/>
      <Cards/>
      <Footer/>
      

      {userStatus && <button type='button' onClick={handleLogOut}>Log Out</button>}
    </>)

}

export {Home,isLoggedIn};