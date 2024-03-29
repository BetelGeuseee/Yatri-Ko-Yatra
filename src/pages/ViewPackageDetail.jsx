import React, { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { db } from "../fire";
import { doc,getDoc ,deleteDoc} from "firebase/firestore";
import '../components/components_css/ViewPackageDetail.css'
import { auth } from "../fire";
import { store } from "../fire";
import { deleteObject} from "firebase/storage";
import KhaltiCheckout from "khalti-checkout-web";
import config from "../khalti/khaltiConfig";
import { ref } from "firebase/storage";
import { Link } from "react-router-dom";

import InterestPackages from "../components/InterestPackages";


const ViewPackageDetail = ()=>{
    const [pack_age,setPackage] = useState({});
    const [currentId , setCurrentId] = useState('');
   
    
   const {id,aid} = useParams();
  

   useEffect(()=>{
   /* if(auth.currentUser.uid.includes(aid)){
        setCurrentId(true)
      }else{
        setCurrentId(false);
      } */
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
   function buyPackage(){
       let checkout = new KhaltiCheckout(config);
       checkout.show({amount: `${(pack_age.packagePrice)}`});
   }

    return (
      <div className="main-view-div-container">
    <div className="view-containerrr">
        <div className="view-detal-container">
            <div className="pack-image-cont">
                <img  className="pack-img" src={pack_age.packageImage} alt="Image is Loading"/>
            </div>
            <h1>{pack_age.packageName}</h1>

            <h3>Place={pack_age.packagePlace}</h3>
            <Link to={`/show-map/${pack_age.packagePlace}`}>View On Map</Link>
            <h5>Price={pack_age.packagePrice}</h5>
            <br/>
            <div className="pack-desc-cont">
            <p className="pack-desc">{pack_age.packageDescription} </p>
            </div>
           
            <button type="button" className="buy-package-button" onClick={buyPackage}>Buy This Package</button>
        </div>
         
       
        
    </div>
    
    <div className="google-map-container">
  
    </div>
    
    </div>)

}
// <InterestPackages/>
//   {currentId && <button type="button" onClick={deletePackage}>Delete Package</button>}
export default ViewPackageDetail;