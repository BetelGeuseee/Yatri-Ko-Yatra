import React, { useState } from 'react'
import '../App.css'
import HeroSection from '../components/HeroSection'
import { useNavigate } from "react-router-dom";
import Cards from '../components/Cards'
import Footer from '../components/Footer'
import { auth } from "../fire";
import { signOut } from 'firebase/auth';
import { onAuthStateChanged } from 'firebase/auth';
import AgencySlider from '../components/AgencySlider';
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

  onAuthStateChanged(auth,(user)=>{

    if(user){
     
       changeUserStatus(true);
       isLoggedIn=true;

    }else{
     
       changeUserStatus(false);
       isLoggedIn=false;
    }
  })
console.log(isLoggedIn);
  const handleLogOut = () =>{
    signOut(auth).then(() => {
       navigate('/signin')
    }).catch((error) => {
      alert('Could not signOut right now. Try again later!!!')
    });
    }
   
    return(<>
      <HeroSection/>
      <Cards/>
      <AgencySlider/>
      <Footer/>
      

      {userStatus && <button type='button' onClick={handleLogOut}>Log Out</button>}
    </>)

}

export {Home,isLoggedIn};