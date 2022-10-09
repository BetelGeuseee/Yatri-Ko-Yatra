import React, { useState } from "react";
import '../components/components_css/CreateBlog.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { store } from "../fire";
import { db } from "../fire";

import { auth } from "../fire";
const CreateBlog = (props) => {

  const [title, setTitle] = useState('');
  const [placeName, setPlaceName] = useState('');
  const [placeDesc, setPlaceDesc] = useState('');
  const [things, setThings] = useState('');
  const [specific, setSpecific] = useState('');
  const [imageFile, setImageFile] = useState(null);

 console.log(props.uuid.uid);

  const handleImageFile = (e) => {

    setImageFile(e.target.files[0]);
  }
  /*console.log(props.userId); */
  const uploadBlog = () =>{



        if(imageFile==null)
          return;

        const imgRef = store.ref().child(`images/${imageFile.name}`);
        imgRef.put(imageFile).then((snapshot) =>{
            toast('Image Uploaded Successfully')
            imgRef.getDownloadURL().then((url)=>{
                const imgUrl = url;
                db.collection('blogs')

            })
        }).catch((error)=>{
            alert('An Error Occured!!!')
        })

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
    <button type="button" onClick={uploadBlog} style={{ marginTop: "20px" }}> Upload Blog
    </button>
    <ToastContainer />

  </div>)




}

export default CreateBlog;


