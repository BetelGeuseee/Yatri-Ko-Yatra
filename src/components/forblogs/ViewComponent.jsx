import React from "react";
import './ViewComponent.css';

const ViewComponent = ()=>{

 
    return (<div className="view-container">

       <h1 className="blog-title"> Swim In the Vast Ocean</h1>
       <div className="date-author">
       <p className="date-style"> Date = 2022/12/10 </p>
       <h3 className="author-name"> Author = Shirshak Upadhayay</h3>
       </div>
       <h2 className="place-style"> Place = Shey Phoksundo </h2><br/>

    <div className="view-description">
       <p className="description-para">Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
        when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
        It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
        It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
        and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        Contrary to popular belief, Lorem Ipsum is not simply random text. 
        
        
        It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, 
        a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, 
        from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. 
        Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, 
        written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, 
        "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</p>
        <br/> <br/> 

        <h2 className="blog-title">Things Not To Do</h2> <br/>
        <p className="things-para">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
        when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
        It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
        It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
        and more recently with desktop publishing software
        </p> <br/>

        <h2 className="blog-title">Specific Destination To Visit</h2> <br/>
        <p className="specific-para">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
        when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
        It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
        It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
        and more recently with desktop publishing software
        </p>
    </div>


        
    </div>)

}


export default ViewComponent