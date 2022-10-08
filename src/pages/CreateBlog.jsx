import React from "react";
import '../components/components_css/CreateBlog.css'

const CreateBlog = ()=>{

    return (<div className="create-blog-container">
       
       <h1>Create Your Own Blog</h1>

       <input className="place" type="text" placeholder="Place Name" />

       <textarea placeHolder="Place Description" className="place-description" rows="15" cols="150"/>
  
      <div className="specific-detail">

      <textarea placeholder="Things Not To Do" className="things-no-do" rows="10" cols="50"/> 


      <textarea placeholder="Specific Destination To Visit" className="specific-destination" rows="10" cols="50"/>

      </div>

      <input type="file" className="chooser" accept="image/*"/>
      <button type="button"> Upload Blog
      </button>

    </div>)




}

export default CreateBlog;


