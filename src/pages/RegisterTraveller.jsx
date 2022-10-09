import React from "react";
import '../components/components_css/RegisterTraveller.css'
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { auth } from "../fire";
import { db } from "../fire";
import { createUserWithEmailAndPassword } from "firebase/auth";
import {doc , setDoc} from 'firebase/firestore';

const RegisterTraveller = ()=>{
const navigate = useNavigate();
const [uname,setUname] = useState('');
const [email,setEmail] = useState('');
const [password,setPassword] = useState('');



function handleClick(){
    navigate('/register')
}
function handleClickTwo(){
    navigate('/signin')
}
function registerClick(){

if(uname.trim()!==0 && email.trim()!==0 && password.trim()!==0){
   const obj = {uname,email,password}
   console.log(obj);

   const data = {
     username : uname, email: email, password: password
   }

   createUserWithEmailAndPassword(auth,email,password).then((userCredentials)=>{
     
       const userid = userCredentials.user.uid
       const docReference = doc(db,'travellers',userid);
       setDoc(docReference,data).then((userRef)=>{
          navigate('/');
       }).catch((error)=>{
          alert(error.message);
       })    
   }).catch((error)=>{
       const errmssg = error.message;
       alert(errmssg);
   })
}
else{
    alert('Fields are empty');
}

}


    return (<div className="main_container">
       
        <form className="container">
        <h1>REGISTER AS TRAVELLER</h1>
            <label>
                Username: 
                <input type="text" name="username" onChange={ (e) => setUname(e.target.value)}/>
            </label>
            <label>
            Email:
            <input type="text" name="email" onChange={ (e) => setEmail(e.target.value)}></input>
        </label>
        <label>
            Password:
            <input type="password" name="password" onChange={(e)=> setPassword(e.target.value)}></input>
        </label>
        <button type="button" onClick={registerClick}>Register</button>
        <button type="button" onClick={handleClick}>Register As Agency</button>
        <button type="button" onClick={handleClickTwo}>Already Have An Account? Sign In.</button>
        </form>
    </div>)
}
export default RegisterTraveller;