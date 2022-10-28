import React from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { collection } from "firebase/firestore";
import { db } from "../../fire";
import { onSnapshot, query,where } from "firebase/firestore";

const RightProfileComponent = (props)=>{
   const [packages, setPackages] = useState([]);
   const [searchTerm, setSearchTerm] = useState('');
   const agencyId = props.agencyId;
   useEffect(()=>{
     
      const packageRef  = collection(db,'packages');
      const q = query(packageRef, where("userId", "==", agencyId));
      onSnapshot(q,(snapshot)=>{
        const pack = snapshot.docs.map((doc)=>({
          id: doc.id,
          ...doc.data(),
        }))
        setPackages(pack)
      })

  
      
   },[])

   

   function renderFunction(pack_age){
           
         return(
            <div className="p-cards">
              
            <div className="package-image-container">
               <img src={pack_age.packageImage} className="package-image"/>
            </div>
            
               <h5 className="package-tag">{pack_age.packagePlace}</h5>
               <h1>{pack_age.packageName}</h1>
               <p className="package-para">Price = {pack_age.packagePrice}</p>
               <button type="button" className="see-more-button"> View Details </button>
              
          </div>
         )
   }


    return (<div className="right-profile-container">
        <div className="search-package">
          <input type='text' placeholder="Seach For A Package" className="search-package-box" onChange={(e)=>setSearchTerm(e.target.value)} ></input>
        </div>

        <div className="packages-cards">

     
    {packages.filter((pack_age)=>{
      if(searchTerm == ""){
        return pack_age;
      }else if(pack_age.packagePlace.toLowerCase().includes(searchTerm.toLowerCase())){
         return pack_age;
      }
    }).map(renderFunction)}
           
            
         
           
        

        </div>
    </div>)
}

export default RightProfileComponent;