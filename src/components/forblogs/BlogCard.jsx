import React from "react";
import '../forblogs/BlogCards.css'
import { useState,useEffect } from "react";
import { db } from "../../fire";
import { onSnapshot, orderBy, query } from "firebase/firestore";
import { collection } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { doc, deleteDoc , getDoc} from "firebase/firestore";
import { store } from "../../fire";
import { refFromURL ,deleteObject} from "firebase/storage";
import { ref } from "firebase/storage";
import { auth } from "../../fire";
import { Link } from "react-router-dom";


const DeleteComponent = (props) =>{

  const postid = props.postId;

  function deleteBlog(){
    

    getDoc(doc(db,'blogs',postid)).then((docRef)=>{
      const imgUrl= docRef.data().imageUrl;
      const imgRef = ref(store,imgUrl);
      
      deleteObject(imgRef).then(()=>{
        deleteDoc(doc(db,'blogs',postid)).then(()=>{
          alert('succesfully deleted your blog')
    
        }).catch((error)=>{
           alert('Error occured');
        })
           
      })
    })
   
    
       
  }
  return (<div>
    <h4 className="delete-style" onClick={deleteBlog}>DELETE</h4>
  </div>)
}
const BlogCard = ()=>{

  const [blogs,setBlogs] = useState([]);
  const [userStatus,changeUserStatus] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();
  const [userId,setUserId] = useState();
 
  useEffect(()=>{

    onAuthStateChanged(auth,(user)=>{
      if(user){
        setUserId(user.uid);
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


        <div className="blog-image">   
           <Link to={`/view-blog/${post.id}`}>
           <img className="ima" src={post.imageUrl}/>
           </Link>
        </div>
           
            <h5 className="place-name">{post.place}</h5>

            <h2 className="place-title">{post.title}</h2>
            
            <p className="place-desc">{post.description.substring(0,150)}...</p>
            <div className="info">
            <p className="upload-date">{withSlashes}</p>
          <h3 className="writer-name">{post.writer}</h3>
          {userId === post.writerId && <DeleteComponent postId = {post.id}/>}
            </div>
           
            <Link to={`/view-blog/${post.id}`}>
            <button type="button"> Read More </button>
            </Link>
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