import React, { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { db } from "../fire";
import { doc,getDoc ,deleteDoc} from "firebase/firestore";
import '../components/components_css/ViewPackageDetail.css'
import { auth } from "../fire";
import { store } from "../fire";
import { deleteObject} from "firebase/storage";
import { ref } from "firebase/storage";

const ViewPackageDetail = ()=>{
    const [pack_age,setPackage] = useState({});
    const [currentId , setCurrentId] = useState('');


   const {id,aid} = useParams();

   useEffect(()=>{
    if(auth.currentUser.uid.includes(aid)){
        setCurrentId(true)
      }else{
        setCurrentId(false);
      }
    const packRef = doc(db,'packages',id)
    async function getPackage(){
          const docSnap = await getDoc(packRef);
          setPackage(docSnap.data());
        
         
    }
    getPackage();
   
   },[])

   const deletePackage = ()=>{

    getDoc(doc(db,'packages',id)).then((docRef)=>{
        const imgUrl= docRef.data().packageImage;
        const imgRef = ref(store,imgUrl);
        
        deleteObject(imgRef).then(()=>{
          deleteDoc(doc(db,'packages',id)).then(()=>{
            alert('succesfully deleted your blog')
      
          }).catch((error)=>{
             alert('Error occured');
          })
             
        })
      })
     
   }

    return (<div className="view-containerrr">
        <div className="view-detal-container">
            <div className="pack-image-cont">
                <img  className="pack-img" src={pack_age.packageImage} alt="Image is Loading"/>
            </div>
            <h1>{pack_age.packageName}</h1>
            <h3>Place={pack_age.packagePlace}</h3>
            <h5>Price={pack_age.packagePrice}</h5>
            <br/>
            <p>{pack_age.packageDescription} </p>

            <button type="button">Buy This Package</button>
            {currentId && <button type="button" onClick={deletePackage}>Delete Package</button>}
        </div>
         
        
        
    </div>)

}

export default ViewPackageDetail;