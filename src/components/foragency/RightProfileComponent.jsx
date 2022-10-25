import React from "react";
import { Link } from "react-router-dom";

const RightProfileComponent = ()=>{


    return (<div className="right-profile-container">
        <div className="search-package">
          <input type='text' placeholder="Seach For A Package" className="search-package-box" ></input>
        </div>

        <div className="packages-cards">
            <div className="p-cards">
              
                 <h5 className="package-tag">Pokhara</h5>
                 <h1>Rafting</h1>
                 <p>Price = Rs20,000</p>
                 <button type="button" className="see-more-button"> See More </button>
            </div>
            <div className="p-cards">
              
              <h5 className="package-tag">Mustang</h5>
              <h1>Trekking</h1>
              <p>Price = Rs20,000</p>
              <button type="button" className="see-more-button"> See More </button>
         </div>
         <div className="p-cards">
              
              <h5 className="package-tag">Champadevi</h5>
              <h1>Hiking</h1>
              <p>Price = Rs20,000</p>
              <button type="button" className="see-more-button"> See More </button>
         </div>
         <div className="p-cards">
              
              <h5 className="package-tag">Champadevi</h5>
              <h1>Hiking</h1>
              <p>Price = Rs20,000</p>
              <button type="button" className="see-more-button"> See More </button>
         </div>
         <div className="p-cards">
              
              <h5 className="package-tag">Champadevi</h5>
              <h1>Hiking</h1>
              <p>Price = Rs20,000</p>
              <button type="button" className="see-more-button"> See More </button>
         </div>
         <div className="p-cards">
              
              <h5 className="package-tag">Champadevi</h5>
              <h1>Hiking</h1>
              <p>Price = Rs20,000</p>
              <button type="button" className="see-more-button"> See More </button>
         </div>
         <div className="p-cards">
              
              <h5 className="package-tag">Champadevi</h5>
              <h1>Hiking</h1>
              <p>Price = Rs20,000</p>
              <button type="button" className="see-more-button"> See More </button>
         </div>
         
           
        

        </div>
    </div>)
}

export default RightProfileComponent;