import React from "react";
import '../components/components_css/Registration.css'
import { useState } from "react";
import {useNavigate} from "react-router-dom"
import { db } from "../fire";
import { auth } from "../fire";
import {doc,setDoc} from 'firebase/firestore';
import { createUserWithEmailAndPassword } from "firebase/auth";


const Registration = ()=>{

const navigate = useNavigate();

const [agencyEmail, setEmail] = useState('');
const [password,setPassword] = useState('');
const [agencyNumber, setNumber] = useState('');
const [location,setLocation] = useState('');
const [agencyName , setAgencyName] = useState('');

const registerAgency = ()=>{
const data = { agencyName : agencyName, agencyEmail: agencyEmail, password: password, agencyNumber: agencyNumber,
               agencyLocation: location }
 createUserWithEmailAndPassword(auth,agencyEmail,password).then((userCredentials)=>{


        const userId = userCredentials.user.uid;
        const docReference  = doc(db,'agencies',userId);

         
        setDoc(docReference, data).then((docRef)=>{
            console.log(docRef.id);
            navigate('/')
        }).catch((error)=>{
           alert(error.message)
        })
       
     
 }).catch((error)=>{
    alert(error.message)
 })
}
 /*  db.collection('agencies').add(data).then((docRef)=>{
            console.log(docRef.id)
             navigate('/')
        }).catch((error)=>{
            const errorMsg = error.message;
            alert(errorMsg);
        })
 }).catch((error)=>{
          const errorMsg  = error.message;
          alert(errorMsg);
 }) */

function handleClick(){
navigate('/registertraveller')
}
function handleClickTwo(){
    navigate('/signin')
}
    return (<div className="main_container">
     
      <form className="container">
      <h1>REGISTER AS AN AGENCY</h1>
        <label>
            Agency Name 
            <input type='text' name='agency_name' onChange={ (e)=> setAgencyName(e.target.value)}/>
        </label>
        <label>
            Email:
            <input type="text" name="email" onChange={(e)=>setEmail(e.target.value)}/>
        </label>
       
        <label>
            Agency Number:
            <input type="number" name="number" onChange={(e)=>setNumber(e.target.value)}/>
        </label>
        <label>
            Agency Location:
            <input type="text" name="location" onChange={(e)=>setLocation(e.target.value)}/>
        </label>
        <label>
            Password:
            <input type="password" name="password" onChange={(e)=>setPassword(e.target.value)}/>
        </label>
        <button type="button" onClick={registerAgency}>Register</button>
        <button type="button" onClick={handleClick}>Register As A Traveller</button>
        <button type="button" onClick={handleClickTwo}>Already Have An Account? Sign In.</button>
      </form>
     
    </div>)
}

export default Registration;