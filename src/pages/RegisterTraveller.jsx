import React from "react";
import '../components/components_css/RegisterTraveller.css'
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { fire } from "../fire";
import { db } from "../fire";

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

   fire.auth().createUserWithEmailAndPassword(email,password).then((userCredentials)=>{
        db.collection("travellers").add({ username : uname, email: email, password: password}).then((docRef)=>{
            console.log(docRef.id)
            navigate('/');
        }).catch((error)=>{
            const errormssg = error.message;
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