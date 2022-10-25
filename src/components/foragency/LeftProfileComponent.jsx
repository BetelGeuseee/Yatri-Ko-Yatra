import React from "react";
import '../components_css/AgencyProfile.css';
import { Rating } from 'react-simple-star-rating'
import { useState } from "react";

const LeftProfileComponent = (props)=>{

    const [rating,setRating] = useState(0);

   const agency = props.agency;

   const ratingSetter = (rate)=>{
    setRating(rate)
   }
    return (<div className="left-profile-container">
        <div className="agency-profile-img-container">
           <img className="agency-profile-image" src={agency.profileImage} />
           <h2>{agency.agencyName}</h2>
           <br/>
           <p className="desc">Location = {agency.agencyLocation}</p>
           <p className="desc">Contact Us = {agency.agencyNumber}</p>
           <p className="desc">Email = {agency.agencyEmail}</p>
           <br/>
           <p> Rating = <span><Rating initialValue={agency.rating} readonly={true} size={40} /> </span> </p>
           <br/>
           <button type="button">Create A Package</button>
           
           <div className="comment-container">
           <h3 className="feedback-head">Give Us Your Feedback</h3>
           <div className="feedback-container">
                <input type='text' placeholder="Write Your Comments" className="comments-style"></input>  
                
              <p>Rate Us =  <span><Rating onClick={ratingSetter} className='yolo' /> </span></p>       
                
           </div>
           <button type="button">Post Feedback</button>

        </div>
        </div>
          
    </div>);
}

export default LeftProfileComponent