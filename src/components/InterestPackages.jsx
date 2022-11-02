import React from "react";
import '../components/components_css/InterestPackages.css';
import { useState } from "react";
import { db } from "../fire";
import { collection,where,query,onSnapshot } from "firebase/firestore";
import { useEffect } from "react";

const PackageCard = (props) =>{

 
  function renderFunction (pa){
    <div className="p-cards">
              
    <div className="package-image-container">
       <img src={pa.packageImage} className="package-image"/>
    </div>
    
       <h5 className="package-tag">{pa.packagePlace}</h5>
       <h1 className="pack-name">{pa.packageName}</h1>
       <p className="package-para">Price = {pa.packagePrice}</p>
       <button type="button" className="see-more-button"> View Details </button>
      
  </div>

  }


  return (
    <div className="packages-cards">

      {props.packa.map(renderFunction)}
   
</div>)
}

const InterestPackages = ()=>{

   const [interests,setInterests] = useState([]); 
   const [pack_ages ,setPack_ages] = useState([]);
   const [displayCards,setDisplayCards] = useState(false);
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
      // setDisplayCards(true);
   }

    function handleChange(e){
           const value = e.target.value;
           const checked = e.target.checked;
           console.log(value,checked)
           if(checked){
               setInterests([
                ...interests,value
               ])
           }else{
            setInterests(interests.filter((e)=> (e!==value)))
            setPack_ages([])
           }
    }
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
   
     {displayCards && <PackageCard packa= {pack_ages}/>}
    </ div>)
}
// 
export default InterestPackages;