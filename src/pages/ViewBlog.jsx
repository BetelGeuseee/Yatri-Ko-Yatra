import React from "react";
import { useParams } from "react-router-dom";
import '../components/components_css/ViewBlog.css';
import RightViewComponent from "../components/forblogs/RightViewComponent";
import ViewComponent from "../components/forblogs/ViewComponent";

const ViewBlog = ()=>{

    const {id} = useParams();

   console.log(id);
    return (<div className="main-bucket">
        
            <img  className='view-image' src="../images/nature1.jpg" alt="no image found for this blog" />

          <div className="component-container">
               <ViewComponent/>
               <RightViewComponent/>
          </div>
          
         
    </div>)

}

export default ViewBlog;