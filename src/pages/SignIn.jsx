import React from "react";
import '../components/components_css/SignIn.css'
import { useNavigate } from "react-router-dom";
const SignIn = () =>{
const navigate = useNavigate();

   function handleClickOne(){
    alert('Clicked hehe')
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
                <input type="text" name="email"/>
            </label>
            <label>
                Password:
                <input type="password" name="password" />
            </label>
            <button type='button' onClick={handleClickOne} > Sign In </button>
            <button type='button' onClick={handleClickTwo}> Register As A Traveller</button>
            <button type='button' onClick={handleClickThree}> Register As A Agency</button>
        </form>
    </div>)
}

export default SignIn;