import React from "react";
import '../components/components_css/Registration.css'
import { useState } from "react";
import {useNavigate} from "react-router-dom"
import { db, store } from "../fire";
import { auth } from "../fire";
import {doc,setDoc} from 'firebase/firestore';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Registration = ()=>{

const navigate = useNavigate();

const [agencyEmail, setEmail] = useState('');
const [password,setPassword] = useState('');
const [agencyNumber, setNumber] = useState('');
const [location,setLocation] = useState('');
const [agencyName , setAgencyName] = useState('');
const [imageFile, setImageFile] = useState(null);
const [imgUrl ,setImageUrl] = useState('');

const registerAgency = ()=>{
const id = toast.loading("Registering Agency...Please Wait!!!");

 createUserWithEmailAndPassword(auth,agencyEmail,password).then((userCredentials)=>{

    if(imageFile==null)
      return;

        const userId = userCredentials.user.uid;
        const docReference  = doc(db,'agencies',userId);
        
        const imgRef = ref(store,`images/${imageFile.name}`);
         uploadBytes(imgRef,imageFile).then((snapshot)=>{
            getDownloadURL(imgRef).then((url)=>{
                const data = { agencyName : agencyName, agencyEmail: agencyEmail, password: password, agencyNumber: agencyNumber,
                    agencyLocation: location, profileImage: url, rating: 0}
                       setDoc(docReference, data).then((docRef)=>{
                       toast.update(id, { render: "Blog Uploaded Successfully", type: "success", isLoading: false });
                       navigate('/')
                }).catch((error)=>{
                   alert(error.message)
                })
            })
         })
 }).catch((error)=>{
    alert(error.message)
 })
}

function handleClick(){
navigate('/registertraveller')
}
function handleClickTwo(){
    navigate('/signin')
}

const handleImageFile = (e) => {

    setImageFile(e.target.files[0]);
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
        <label> Select Profile Image:
             <input type="file" className="chooser" accept="image/*" onChange={handleImageFile} />
        </label>
        <button type="button" onClick={registerAgency}>Register</button>
        <button type="button" onClick={handleClick}>Register As A Traveller</button>
        <button type="button" onClick={handleClickTwo}>Already Have An Account? Sign In.</button>
      </form>
      <ToastContainer />
     
    </div>)
}

export default Registration;