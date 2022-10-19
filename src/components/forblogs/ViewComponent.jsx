import React from "react";
import './ViewComponent.css';



const ViewComponent = (props)=>{

 


/*const year = props.blogg.date.toDate().getFullYear();
const month = props.blogg.date.toDate().getMonth() + 1;
const day = props.blogg.date.toDate().getDate();
const withSlashes = [year, month, day].join('/');  */
 


    return (<div className="view-container">

       <h1 className="blog-title"> {props.blogg.title}</h1>
       <div className="date-author">
       <p className="date-style"></p>
       <h3 className="author-name"> Author = {props.blogg.writer}</h3>
       </div>
       <h2 className="place-style"> Place = {props.blogg.place}</h2><br/>

    <div className="view-description">
       <p className="description-para">{props.blogg.description}</p>
        <br/> <br/> 

        <h2 className="blog-title">Things Not To Do</h2> <br/>
        <p className="things-para">
          {props.blogg.tntd}
        </p> <br/>

        <h2 className="blog-title">Specific Destination To Visit</h2> <br/>
        <p className="specific-para">
        {props.blogg.sdtv}
        </p>
    </div>


        
    </div>)

}


export default ViewComponent