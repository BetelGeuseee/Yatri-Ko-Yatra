import React from "react";
import './RightViewComponent.css'
const RightViewComponent = ()=>{
   


   return (<div className="right-view-container">
      <h2 className="author-title">About Author</h2>
      <hr/>
      <br/>
      <div className="image-and-description">
      <div className="about-author">
        <img className="author-profile-image" src="../images/nature1.jpg" />
      </div>
      <div className="name-email">
           <h3>Name = Shirshak Upadhayay</h3>
           <p>Email = shirshakupadhayay182@gmail.com </p>

      </div>
      </div>
      <br/>
      <hr/>
      <br/>
       <h2 className="author-title"> Some More Blogs </h2>
      <div className="for-blog-card">
           <div className="right-view-card">
              <div className="right-image-div">
              <img className="right-view-card-img" src="../images/travelpic2.jpg"/>
              </div>
              <div className="right-card-description">
                <h3>Most Beautiful Place To Visit</h3>
                <div className="para-make">
                <p className="right-para-style">It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, 
                    a Latin professor at Hampden-Sydney College in Virginia.
                </p>
                </div>
              </div>
           </div>
           <div className="right-view-card">
              <div className="right-image-div">
              <img className="right-view-card-img" src="../images/travelpic1.jpg"/>
              </div>
              <div className="right-card-description">
                <h3>Most Beautiful Place To Visit</h3>
                <div className="para-make">
                <p className="right-para-style">It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, 
                    a Latin professor at Hampden-Sydney College in Virginia.
                </p>
                </div>
              </div>
           </div>
           <div className="right-view-card">
              <div className="right-image-div">
              <img className="right-view-card-img" src="../images/travelpic3.jpg"/>
              </div>
              <div className="right-card-description">
                <h3>Most Beautiful Place To Visit</h3>
                <div className="para-make">
                <p className="right-para-style">It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, 
                    a Latin professor at Hampden-Sydney College in Virginia.
                </p>
                </div>
              </div>
           </div>
           <div className="right-view-card">
              <div className="right-image-div">
              <img className="right-view-card-img" src="../images/travelpic4.jpg"/>
              </div>
              <div className="right-card-description">
                <h3>Most Beautiful Place To Visit</h3>
                <div className="para-make">
                <p className="right-para-style">It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, 
                    a Latin professor at Hampden-Sydney College in Virginia.
                </p>
                </div>
              </div>
           </div>
    
      </div>
   </div>)
}

export default RightViewComponent;