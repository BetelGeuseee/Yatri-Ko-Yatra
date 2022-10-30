import React from "react";
import '../components_css/AgencyProfile.css';
import { Rating } from 'react-simple-star-rating'
import { useState } from "react";
import { auth } from "../../fire";
import { ref } from "firebase/storage";
import { store } from "../../fire";
import { db } from "../../fire";
import { addDoc, collection } from "firebase/firestore";
import { getDownloadURL, uploadBytes } from "firebase/storage";
import { useEffect } from "react";
import { query } from "firebase/firestore";
import { onSnapshot } from "firebase/firestore";
import { where } from "firebase/firestore";

const LeftProfileComponent = (props)=>{

    const [rating,setRating] = useState(0);
    const [modal, setModal] = useState(false);
    const [model,setModel] = useState(false);
    const [imageFile, setImageFile] = useState(null);
    const [packageName, setPackageName] = useState('');
    const [packagePlace, setPackagePlace] = useState('');
    const [packageDescription, setPackageDescription] = useState('');
    const [packagePrice, setPackagePrice] = useState('');
    const [isCurrentId, setCurrentId] = useState(false);
    const [comment,setComment] = useState('');
    const [comments,setComments] = useState([]);
   const agency = props.agency;

   if(model){
    document.body.classList.add('active-model')
   }else{
    document.body.classList.remove('active-model')
   }

   useEffect(()=>{

    if(auth.currentUser.uid.includes(props.agencyId)){
      setCurrentId(true)
    }else{
      setCurrentId(false);
    }

    const commentRef  = collection(db,'comments');
    const q = query(commentRef, where("agencyId", "==", props.agencyId));
    onSnapshot(q,(snapshot)=>{
      const com = snapshot.docs.map((doc)=>({
        id: doc.id,
        ...doc.data(),
      }))
      setComments(com)
    })
   },[])

  
   const ratingSetter = (rate)=>{
    setRating(rate)
   }
   const toggleModal = () => {
    setModal(!modal);
  };
  const modelToggle = ()=>{
    
      setModel(!model)
  }


 
  const createPackage = ()=>{
        
       if(imageFile==null)
       return;

       const userId = props.userId.uid;

       const imgRef = ref(store,`images/${imageFile.name}`);
      
       uploadBytes(imgRef,imageFile).then((snapshot)=>{
        getDownloadURL(imgRef).then((url)=>{
            const data = {packageName: packageName, packagePlace: packagePlace,
            packagePrice: packagePrice, packageImage: url, packageDescription: packageDescription,
          userId}
          addDoc(collection(db,'packages'),data).then((docRef)=>{
            alert('successfully uploaded your package');
            toggleModal();
          })

        })
       })
       

  }

  const postFeedback = ()=>{

    if(auth.currentUser == null){
      alert("Please Sign In As A User")
      return;
    }else{
    
    const userId = auth.currentUser.uid;
    const username = auth.currentUser.displayName;
    const agencyId = props.agencyId;
    const feedbackData = {comment: comment, star: rating, userId: userId,username: username, agencyId: agencyId}

    addDoc(collection(db,'comments'),feedbackData).then(()=>{
      alert('comment added successfully');
      setComment("");
      setRating(0);

    }).catch((error)=>{
      alert(error.message);
    })
  }
  }

  const renderComment = (comm)=>{
  return (<div className="model-content">
  <h2 className="comment-username">{comm.username}</h2>
  <p>{comm.comment}</p>
  <Rating initialValue={comm.star} readonly={true} size={20} /> 
  <hr/>
  </div>)
  }
 

  const handleImageFile = (e) => {

    setImageFile(e.target.files[0]);
  }
    return (<div className="left-profile-container">
        <div className="agency-profile-img-container">
           <img className="agency-profile-image" src={agency.profileImage} />
           <h2>{agency.agencyName}</h2>
           <br/>
           <p className="desc">Location = {agency.agencyLocation}</p>
           <p className="desc">Contact Us = {agency.agencyNumber}</p>
           <p className="desc">Email = {agency.agencyEmail}</p>
           <br/>
           <p> Rating = <span><Rating initialValue={agency.rating} readonly={true} size={40} /> </span> </p>
           <br/>
         {isCurrentId &&  <button type="button" onClick={toggleModal}>Create A Package</button>}
           
           <div className="comment-container">
           <h3 className="feedback-head">Give Us Your Feedback</h3>
           <div className="feedback-container">
                <input type='text' placeholder="Write Your Comments" className="comments-style" onChange={(e)=>setComment(e.target.value)}></input>  
                
              <p>Rate Us =  <span><Rating onClick={ratingSetter} className='yolo' /> </span></p>       
                
           </div>
           <button type="button" onClick={postFeedback}>Post Feedback</button>

        </div>
        <div className="agency-review">
        <h2 className="review" onClick={modelToggle}>View Reviews</h2>
        </div>
        </div>

        {modal && (
        <div className="modal">
          <div  className="overlay"> 
          
          <div className="modal-content">
               
          <label className="lab">
               Package Name: 
                <input type="text" onChange={(e)=>setPackageName(e.target.value)}/>
            </label>
            <label className="lab">
               Place: 
                <input type="text" onChange={(e)=>setPackagePlace(e.target.value)} />
            </label>
            <label className="lab">
               Price: 
                <input type="text" onChange={(e)=>setPackagePrice(e.target.value)}/>
            </label>
            <label className="lab">
            
                <textarea type="text"  rows="10" cols="35" placeholder="Package Description" onChange={(e)=>setPackageDescription(e.target.value)}/>
            </label>
            <label className="lab"> Select Image For Your Package:
             <input type="file" className="chooser" accept="image/*" onChange={handleImageFile} />
        </label>

            <button type="button"  className="package-button" onClick={createPackage}>
               Create
            </button>
            <button type="button" onClick={toggleModal} className="package-button">
               Cancel
            </button>
          </div>
          </div>
        </div>
      )}


      {model && (
        <div className="model">
          <div className="comment-overlay">

                 <div className="model-container">

                  {comments.map(renderComment)}
                  
                      <button type="button" onClick={modelToggle} className='comment-button'>Cancel</button>
                  </div>
            </div>
             
          </div>
      )}
          
    </div>);
}

export default LeftProfileComponent