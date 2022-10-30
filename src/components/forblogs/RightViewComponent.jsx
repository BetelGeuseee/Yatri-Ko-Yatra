import React from "react";
import { Link } from "react-router-dom";
import './RightViewComponent.css'
const RightViewComponent = (props)=>{
   

       const id = props.param;
       const writerName = props.writer;
       const eMail = props.mail;
       const proc_url = props.imgUrl;
   const renderFunction = (post)=>{

      return (
         <Link to={`/view-blog/${post.id}`}>
         <div className="right-view-card">
         <div className="right-image-div">
         <img className="right-view-card-img" src={post.imageUrl}/>
         </div>
         <div className="right-card-description">
           <h3>{post.title}</h3>
           <div className="para-make">
           <p className="right-para-style">
            {post.description.substring(0,150)}.....
           </p>
           </div>
         </div>
      </div>
      </Link>
      )
   }

   return (<div className="right-view-container">
      <h2 className="author-title">About Author</h2>
      <hr/>
      <br/>
      <div className="image-and-description">
      <div className="about-author">
        <img className="author-profile-image" src={proc_url} />
      </div>
      <div className="name-email">
           <h3>Name = {writerName}</h3>
           <p>Email = {eMail}</p>

      </div>
      </div>
      <br/>
      <hr/>
      <br/>
       <h2 className="author-title"> Some More Blogs </h2>
      <div className="for-blog-card">
           
           {
            props.rightArticle.map(renderFunction)
           }
   {props.rightArticle.filter((post,index)=>{
      if(post.id === id){
        
      }
    }).map(renderFunction)}
           
      </div>
   </div>)
}

export default RightViewComponent;