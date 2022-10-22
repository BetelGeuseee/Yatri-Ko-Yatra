import React from "react";
import { useParams } from "react-router-dom";
import '../components/components_css/ViewBlog.css';
import RightViewComponent from "../components/forblogs/RightViewComponent";
import ViewComponent from "../components/forblogs/ViewComponent";
import { db } from "../fire";
import { doc,getDoc } from "firebase/firestore";
import { useEffect,useState } from "react";
import { FidgetSpinner } from  'react-loader-spinner'
import { collection, query, onSnapshot, orderBy } from "firebase/firestore";

const ViewBlog = ()=>{

    const {id} = useParams();
    const [blog,setBlog] = useState({});
    const [loadingState,setLoadingState] = useState(false);
    const [article, setArticle] = useState([]);

  

   
    useEffect(()=>{
      const docRef = doc(db,'blogs',id)
      async function getBlog(){
            const docSnap = await getDoc(docRef);
            setBlog(docSnap.data());
           setLoadingState(true);
      }
      getBlog();

      const blogRef  = collection(db,'blogs');
      const q = query(blogRef,orderBy('date','desc'))
      onSnapshot(q,(snapshot)=>{
        const articles = snapshot.docs.map((doc)=>({
          id: doc.id,
          ...doc.data(),
        }))
        setArticle(articles);
      })
     

    },[id]) 
    
    

    

    return (
      <SpinnerComponent loadingState = {loadingState} blog = {blog} rightBlog = {article} param={id} />
      )
         
}

const SpinnerComponent = (props)=>{

  let checker = props.loadingState;
  

  if(checker){
    return (<div className="main-bucket">


    <img  className='view-image' src={props.blog.imageUrl} alt="no image found for this blog" />
    
   
  <div className="component-container">
      <ViewComponent blogg={props.blog} />
       <RightViewComponent rightArticle={props.rightBlog} param = {props.param} writer={props.blog.writer} mail = {props.blog.email}/>
  </div>
</div>)
  }
  else{
    
   return(
    <div className="spinner-div">
   <FidgetSpinner
    visible={true}
    height="180"
    width="180"
    ariaLabel="dna-loading"
    wrapperStyle={{}}
    wrapperClass="dna-wrapper"
    ballColors={['#ff0000', '#00ff00', '#0000ff']}
    backgroundColor="#F4442E"
  />
  </div>  )
  
  }

}

export default ViewBlog;