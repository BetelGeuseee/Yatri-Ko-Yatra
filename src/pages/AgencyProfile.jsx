import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc,deleteDoc } from "firebase/firestore";
import { ref,deleteObject } from "firebase/storage";
import { store } from "../fire";
import { db } from "../fire";
const AgencyProfile = ()=>{

    const {id} = useParams();
    const [agency,setAgency] = useState({});

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
       <div>
          <img src={agency.profileImage}></img>

          <button type="button" onClick={deleteAgency}> Delete My Agency</button>
       </div>


    </>)

}

export default AgencyProfile