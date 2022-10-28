import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { auth } from "../fire";
import { doc, getDoc,deleteDoc } from "firebase/firestore";
import { ref,deleteObject } from "firebase/storage";
import { store } from "../fire";
import LeftProfileComponent from "../components/foragency/LeftProfileComponent";
import RightProfileComponent from "../components/foragency/RightProfileComponent";
import { db } from "../fire";
import '../components/components_css/AgencyProfile.css'
const AgencyProfile = (props)=>{

    const {id} = useParams();
    const [agency,setAgency] = useState({});
    const user = props.userId

    useEffect(()=>{
        const docRef = doc(db,'agencies',id)
        async function getAgency(){
            const docSnap = await getDoc(docRef);
            setAgency(docSnap.data());
          // setLoadingState(true);
      }
      getAgency();

    },[])

    const deleteAgency = ()=>{

        getDoc(doc(db,'agencies',id)).then((docRef)=>{
            const imgUrl= docRef.data().profileImage;
            const imgRef = ref(store,imgUrl);
            
            deleteObject(imgRef).then(()=>{
              deleteDoc(doc(db,'agencies',id)).then(()=>{
                alert('succesfully deleted your blog')
          
              }).catch((error)=>{
                 alert('Error occured');
              })
                 
            })
          })
         

    }




    return (<>
       <div className="main-div-container">
       
       <LeftProfileComponent agency={agency} userId ={user} agencyId = {id}/>
       <RightProfileComponent agencyId = {id}/>
        
       </div>

       
    </>)

}
//<button type="button" onClick={deleteAgency}> Delete My Agency</button>

export default AgencyProfile