import React from "react";
import '../components/components_css/InterestPackages.css';
import { useState } from "react";
import { db } from "../fire";
import { collection,where,query,onSnapshot } from "firebase/firestore";
import { useEffect } from "react";

const InterestPackages = ()=>{

   const [interests,setInterests] = useState([]); 
   const [pack_ages ,setPack_ages] = useState([]);
   const arr = []

   

   const searchPackages = ()=>{
    const postRef  = collection(db,'packages');
       interests.forEach(element => {
        const q = query(postRef, where("packageName", "==", element));
        onSnapshot(q,(snapshot)=>{
          const pack = snapshot.docs.map((doc)=>({
            id: doc.id,
            ...doc.data(),
          }))
        setPack_ages((current) => [...current,pack])
        })
       });
   }

console.log(pack_ages)
    function handleChange(e){
           const value = e.target.value;
           const checked = e.target.checked;

          

           if(checked){
             setInterests([
                ...interests,value
             ]);
           }else{
            setInterests(interests.filter((e)=> (e!==value)))
            setPack_ages([])
           }
    }
    console.log(interests);
    return (<div>

     <h2 className="title-cont">Search Packages According To Your Interest</h2>

     <div className="checkbox-container">
        <div className="checkbox-div">
        <label> Trekking
        <input type="checkbox" value="Trekking" className="check-input" onChange={handleChange}/> 
         </label>
        
         </div>
         <div className="checkbox-div">
        <label> Rafting
           <input type="checkbox" value="Rafting" className="check-input"  onChange={handleChange}/> 
         </label>
         </div>
         <div className="checkbox-div">
        <label> Bungee Jumping
           <input type="checkbox" value="Bungee Jumping" className="check-input"  onChange={handleChange}/> 
         </label>
         </div>
         <div className="checkbox-div">
        <label> Paragliding
           <input type="checkbox" value="Paragliding" className="check-input"  onChange={handleChange}/> 
         </label>
         </div>
         <div className="checkbox-div">
        <label> Adventure
           <input type="checkbox" value="Adventure" className="check-input"  onChange={handleChange}/> 
         </label>
         </div>
     </div>
     <div className="search-button-cont">
     <button type="button" className="search-package-button" onClick={searchPackages}>Search</button>
     </div>
     <br/>
     <hr/>

    </ div>)
}

export default InterestPackages;