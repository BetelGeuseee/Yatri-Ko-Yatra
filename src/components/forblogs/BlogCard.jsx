import React from "react";
import '../forblogs/BlogCards.css'
import { useState,useEffect } from "react";
import { db } from "../../fire";
import { onSnapshot, orderBy, query } from "firebase/firestore";
import { collection } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../fire";
const BlogCard = ()=>{

  const [blogs,setBlogs] = useState([]);
  const [userStatus,changeUserStatus] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();
 
  useEffect(()=>{

    onAuthStateChanged(auth,(user)=>{
      if(user){
  
        changeUserStatus(true);
      }else{
        changeUserStatus(false);
      }
      
    })
   const blogRef  = collection(db,'blogs');
   const q = query(blogRef,orderBy('date','desc'))
   onSnapshot(q,(snapshot)=>{
    const articles = snapshot.docs.map((doc)=>({
      id: doc.id,
      ...doc.data(),
    }));
    setBlogs(articles);
    //console.log(articles);
   });
},[])  

const handleCreateBlog = ()=>{

  navigate('/create-blog');
}
function renderFunction(post){

  const year = post.date.toDate().getFullYear();
  const month = post.date.toDate().getMonth() + 1;
  const day = post.date.toDate().getDate();
  const withSlashes = [year, month, day].join('/');
    return (
    
         
      <div className="blog-cardd">
           
           <img className="ima" src={post.imageUrl}/>
           
            <h5 className="place-name">{post.place}</h5>

            <h2 className="place-title">{post.title}</h2>
            
            <p className="place-desc">{post.description.substring(0,150)}...</p>
            <div className="info">
            <p className="upload-date">{withSlashes}</p>
          <h3 className="writer-name">{post.writer}</h3>
            </div>
            <button type="button"> Read More </button>
        </div>
    
    )
  }
  
    return (
    <div className="main-container">
          <div className="top">
            <div className="box-and-button">
            <input type = 'text' className="box-search" placeholder="Search For Blogs" onChange={(e)=>setSearchTerm(e.target.value)} />
            <button className="search-button" type="button">Search</button>
            {userStatus && <button className="search-button" type="button" onClick={handleCreateBlog}>Create Blog</button>}
            </div>   
          </div>
    <div className="cont">

    {blogs.filter((post)=>{
      if(searchTerm == ""){
        return post;
      }else if(post.place.toLowerCase().includes(searchTerm.toLowerCase())){
         return post;
      }
    }).map(renderFunction)}
           
            
    </div>
    </div>) 
}

export default BlogCard;
//{blogs.map(renderFunction)}