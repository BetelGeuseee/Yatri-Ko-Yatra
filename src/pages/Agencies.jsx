import React from "react";
import { useState } from "react";
import '../components/components_css/Agencies.css';
import { Rating } from 'react-simple-star-rating'
import { useEffect } from "react";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../fire";
import { Link } from "react-router-dom";
const Agencies = ()=>{

    const [rating, setRating] = useState(0)
    const [agencies, setAgencies] = useState([]);
    const [search,setSearch] = useState('');

  /*  const handleRating = (rate) => {
        setRating(rate)
    
        // other logic
      }
      console.log(rating); */
      useEffect(()=>{
        const agencyRef  = collection(db,'agencies');
        onSnapshot(agencyRef,(snapshot)=>{
          const agencies = snapshot.docs.map((doc)=>({
            id: doc.id,
            ...doc.data(),
          }))
          setAgencies(agencies);
        })
      },[])
      
      function renderFunction(agency){
            return (
              <div>
                <Link to={`/agency-profile/${agency.id}`} style={{textDecoration: 'none'}}>
              <div className="agency-cards-items">
              <div className="agency-img-container">
                 <img className="agency-image" src={agency.profileImage}/>
              </div>
              <div className="agency-description">
               <div>
                <h2 className="agency-name-style">{agency.agencyName}</h2>
                <h4 className="agency-loc">Location = {agency.agencyLocation}</h4>
                <p className="agency-loc">Contact Us = {agency.agencyNumber}</p>
              </div>
              <Rating initialValue={agency.rating} readonly={true} size={25}/>
              </div>
          </div>
          </Link>
          </div>
            )
      }

    return (<div className="main-agency-container">

       <div>
            <input type='text' className="agency-search-style" placeHolder="Search For An Agency" onChange={(e)=>setSearch(e.target.value)}></input>
        </div>
        <br/>
        <hr></hr>
        <div className="agency-bottom-container">
            <div className="agencyy-cards">



                  {agencies.filter((agency)=>{
                         if(search == ""){
                             return agency;
                          }else if(agency.agencyName.toLowerCase().includes(search.toLowerCase())){
                             return agency;
                         }
                   }).map(renderFunction)}
            </div>

        </div>
       
    </div>)
}
export default Agencies;