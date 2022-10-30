import React from "react";
import '../components/components_css/RegisterTraveller.css'
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { auth } from "../fire";
import { db } from "../fire";
import { createUserWithEmailAndPassword } from "firebase/auth";
import {doc , setDoc} from 'firebase/firestore';
import { updateProfile } from "firebase/auth";
import { getDownloadURL, uploadBytes } from "firebase/storage";
import { ref } from "firebase/storage";
import { store } from "../fire";

const RegisterTraveller = ()=>{
const navigate = useNavigate();
const [uname,setUname] = useState('');
const [email,setEmail] = useState('');
const [password,setPassword] = useState('');

const [imageFile, setImageFile] = useState(null);

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

  



   createUserWithEmailAndPassword(auth,email,password).then((userCredentials)=>{
     
       const userid = userCredentials.user.uid
       const imgRef = ref(store,`images/${imageFile.name}`)
       uploadBytes(imgRef,imageFile).then((snapshot)=>{
          getDownloadURL(imgRef).then((url)=>{
            const data = {
                username : uname, email: email, password: password, profileImage: url
              }
              updateProfile(auth.currentUser,{displayName: uname}).then((profile)=>{
                const docReference = doc(db,'travellers',userid);
                setDoc(docReference,data).then((userRef)=>{
                   navigate('/');
                }).catch((error)=>{
                   alert(error.message);
                })  
               }).catch((error)=>{
                  alert(error.message);
               })

          })
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
const handleImageFile = (e) => {

    setImageFile(e.target.files[0]);
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
        <label> Select Profile Image:
             <input type="file" className="chooser" accept="image/*" onChange={handleImageFile} />
        </label>
        <button type="button" onClick={registerClick}>Register</button>
        <button type="button" onClick={handleClick}>Register As Agency</button>
        <button type="button" onClick={handleClickTwo}>Already Have An Account? Sign In.</button>
        </form>
    </div>)
}
export default RegisterTraveller;