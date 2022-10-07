import React from "react";
import '../components/components_css/SignIn.css'
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { fire } from "../fire";
const SignIn = () =>{
const navigate = useNavigate();
const [email,setEmail] = useState('');
const [password,setPassword]=useState('');


   function handleClickOne(){
    fire.auth().signInWithEmailAndPassword(email,password).then((userDetails)=>{
          navigate('/')
    }).catch((error)=>{
        const err = error.message;
        alert(err);
    })
   }
   function handleClickTwo(){
    navigate('/registertraveller');
   }
   function handleClickThree(){
    navigate('/register')
   }

    return (<div className="main_container">
        <form className="container">
            <h1>Sign In For YATRA</h1>
            <label>
                Email:
                <input type="text" name="email" onChange={(e)=>setEmail(e.target.value)}/>
            </label>
            <label>
                Password:
                <input type="password" name="password" onChange={(e)=>setPassword(e.target.value)}/>
            </label>
            <button type='button' onClick={handleClickOne} > Sign In </button>
            <button type='button' onClick={handleClickTwo}> Register As A Traveller</button>
            <button type='button' onClick={handleClickThree}> Register As An Agency</button>
        </form>
    </div>)
}

export default SignIn;