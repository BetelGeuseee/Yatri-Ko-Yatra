import React, {useState} from "react";
import '../forblogs/TopComponent.css'
import { isLoggedIn } from "../../pages/Home";
import { auth } from "../../fire";
import { onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";
const TopComponent = ()=>{
  const [userStatus,changeUserStatus] = useState(false);
  const navigate = useNavigate();
  onAuthStateChanged(auth,(user)=>{
    if(user){

      changeUserStatus(true);
    }else{
      changeUserStatus(false);
    }
    
  })
  const handleCreateBlog = ()=>{

    navigate('/create-blog');
  }
  const userStat = isLoggedIn;
  console.log(userStat);
    return (<div className="top">
            <div className="box-and-button">
            <input type='text' className='search-box' placeholder="Search"/>   
            <button className="search-button" type="button">Search</button>
            {userStatus && <button className="search-button" type="button" onClick={handleCreateBlog}>Create Blog</button>}
            </div>   
    </div>)
}

export default TopComponent