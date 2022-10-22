import React, { useEffect, useState } from "react";
import '../components/components_css/CreateBlog.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { store } from "../fire";
import { db } from "../fire";
import { addDoc, collection, query,onSnapshot, orderBy} from "firebase/firestore";
import { ref } from "firebase/storage";
import { useNavigate } from "react-router-dom";
import { uploadBytes, getDownloadURL } from "firebase/storage";

import { auth } from "../fire";
import Blogs from "./Blogs";

const CreateBlog = (props) => {

  const [title, setTitle] = useState('');
  const [placeName, setPlaceName] = useState('');
  const [placeDesc, setPlaceDesc] = useState('');
  const [things, setThings] = useState('');
  const [specific, setSpecific] = useState('');
  const [imageFile, setImageFile] = useState(null);
  const navigate = useNavigate();
  const [selectValue, setSelectValue] = useState('');
  const [agency, setAgency] = useState([]);
  const [budget, setBudget] = useState();
 

 const username = props.userId.displayName;
 const currentUserId = props.userId.uid;
 const email = props.userId.email;
 
 useEffect(()=>{

  const agencyRef  = collection(db,'agencies');
  
  onSnapshot(agencyRef,(snapshot)=>{
   const agencies = snapshot.docs.map((doc)=>({
     id: doc.id,
     ...doc.data(),
   }));
   setAgency(agencies);
  });

 },[])
 
  const handleImageFile = (e) => {

    setImageFile(e.target.files[0]);
  }
  /*console.log(props.userId); */
  const uploadBlog = () =>{

     
        if(imageFile==null)
          return;
          

      const id = toast.loading("Your Blog is Uploading");

        const imgRef = ref(store,`images/${imageFile.name}`);
        uploadBytes(imgRef,imageFile).then((snapshot) =>{
            getDownloadURL(imgRef).then((url)=>{
                const imgUrl = url;

                  const dataObject = {
                    date: new Date(),
                    description : placeDesc,
                    imageUrl : imgUrl,
                    place: placeName,
                    sdtv: specific,
                    title: title,
                    tntd: things,
                    writer: username,
                    writerId: currentUserId,
                    agencyName: selectValue,
                    budget: budget,
                    email:email
                  } 
            //    const docRef = doc(db,'blogs',`${currentUserId}/blogfolder/${new Date()}`)
           // const docRef = doc(db,'blogs',currentUserId);
           const docRef = collection(db,'blogs')
           addDoc(docRef,dataObject).then((userRef)=>{
            toast.update(id, { render: "Blog Uploaded Successfully", type: "success", isLoading: false });
            navigate('/blogs');
           }).catch((error)=>{
            alert(error.message);
           })
            
               /* setDoc(docRef,dataObject,{ merge: true }).then((userRef)=>{
                  toast.update(id, { render: "Blog Uploaded Successfully", type: "success", isLoading: false });
                  navigate('/blogs');
               }).catch((error)=>{
                  
               })  */

            })
        }).catch((error)=>{
            alert(error.message);
        })

  }

  const renderFunction = (agencyObj)=>{

    return (<option>
      {agencyObj.agencyName}
    </option>)
  }
 
  return (<div className="create-blog-container">

    <h1 className="top-title">Create Your Own Blog</h1>

    <input className="place" type="text" placeholder="Title" onChange={(e) => setTitle(e.target.value)} />
    <input className="place" type="text" placeholder="Place Name" onChange={(e) => setPlaceName(e.target.value)} />

    <textarea maxLength="2000" placeholder="Place Description" className="place-description" rows="15" cols="150" onChange={(e) => setPlaceDesc(e.target.value)} />

    <div className="specific-detail">

      <textarea placeholder="Things Not To Do" className="things-no-do" rows="10" cols="50" onChange={(e) => setThings(e.target.value)} />


      <textarea placeholder="Specific Destination To Visit" className="specific-destination" rows="10" cols="50" onChange={(e) => setSpecific(e.target.value)} />

    </div>
    <label> <span className="just-a-span">Select An Image For Upload.....</span>
      <input type="file" className="chooser" accept="image/*" onChange={handleImageFile} />
    </label>
    <select className="select-style" onChange={(e)=> setSelectValue(e.target.value)}>
      Choose Your Agency
     {agency.map(renderFunction)}
    </select>

    <input className="budget-style" type="number" placeholder="Enter Budget" onChange = {(e)=> setBudget(e.target.value)}/>
    <button type="button" onClick={uploadBlog} style={{ marginTop: "20px" }}> Upload Blog
    </button>
    <ToastContainer />

  </div>)




}

export default CreateBlog;


