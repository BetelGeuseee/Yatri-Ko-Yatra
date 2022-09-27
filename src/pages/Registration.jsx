import React from "react";
import '../components/components_css/Registration.css'
import { useState } from "react";
import {useNavigate} from "react-router-dom"
import { db } from "../fire";
import { fire } from "../fire";


const Registration = ()=>{

const navigate = useNavigate();
const [name,setName] = useState('');
cosnt [email, setEmail] = useState('');
const [password,setPassword] = useState('');
const [agencyNumber, setNumber] = useState('');
const [location,setLocation] = useState('');
const [agencyName , setAgencyName] = useState('');

const registerAgency = ()=>{



}
function handleClick(){
navigate('/registertraveller')
}
function handleClickTwo(){
    navigate('/signin')
}
    return (<div className="main_container">
     
      <form className="container">
      <h1>REGISTER AS AGENCY</h1>
        <label>
            Username: 
            <input type='text' name='name' onChange={ (e)=> setName(e.target.value)}/>
        </label>
        <label>
            Email:
            <input type="text" name="email" onChange={(e)=>setEmail(e.target.value)}/>
        </label>
        <label>
            Agency Name:
            <input type="text" name="agency_name" onChange={(e)=>setAgencyName(e.target.value)}/>
        </label>
        <label>
            Agency Number:
            <input type="number" name="number" onChange={(e)=>setNumber(e.target.value)}/>
        </label>
        <label>
            Agency Location:
            <input type="text" name="number" onChange={(e)=>setLocation(e.target.value)}/>
        </label>
        <label>
            Password:
            <input type="password" name="password" onChange={(e)=>setPassword(e.target.value)}/>
        </label>
        <button type="button" onClick={registerAgency}>Register</button>
        <button type="button" onClick={handleClick}>Register As Traveller</button>
        <button type="button" onClick={handleClickTwo}>Already Have An Account? Sign In.</button>
      </form>
     
    </div>)
}

export default Registration;