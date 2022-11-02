import React from "react";
import {useJsApiLoader, GoogleMap ,Marker ,Autocomplete, LoadScript, useLoadScript, DirectionsRenderer} from '@react-google-maps/api'
import '../components/components_css/ShowMap.css'
import { useCallback } from "react";
import { useState } from "react";
import { useMemo } from "react";
import { useRef } from "react";
import { useEffect } from "react";

const ShowMap = ()=>{
  
    

  
   // const api_key = 'AIzaSyDMuYh2OQLhz4vkQrbTn-AU9Au5ZPmj5zs';
   
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: 'AIzaSyDMuYh2OQLhz4vkQrbTn-AU9Au5ZPmj5zs',
    libraries: ['places']
  })
  if(!isLoaded)
    return <div> Loading .... </div>

  return <Map/>  
  
}
function Map(){
    const [directionsResponse, setDirectionsResponse] = useState(null)
    const [distance, setDistance] = useState('')
    const [duration, setDuration] = useState('')
    
  
     /** @type React.MutableRefObject<HTMLInputElement> */
  const originRef = useRef()
  /** @type React.MutableRefObject<HTMLInputElement> */
  const destiantionRef = useRef()
   
   
  
  async function calculateRoute() {
    if (originRef.current.value === '' || destiantionRef.current.value === '') {
      return
    }
    // eslint-disable-next-line no-undef
    const directionsService = new google.maps.DirectionsService()
    const results = await directionsService.route({
      origin: originRef.current.value,
      destination: destiantionRef.current.value,
      // eslint-disable-next-line no-undef
      travelMode: google.maps.TravelMode.DRIVING,
    })
    setDirectionsResponse(results)
    setDistance(results.routes[0].legs[0].distance.text)
    setDuration(results.routes[0].legs[0].duration.text)
    
  }
  function clearRoute() {
    setDirectionsResponse(null)
    setDistance('')
    setDuration('')
    originRef.current.value = ''
    destiantionRef.current.value = ''
  }
 const center = useMemo(()=>({lat: 27.712021, lng: 85.312950}),[])
    return( 
    <div>
        <div className="input-fields-map">
            <div className="auto-complete-inputs">
        <Autocomplete>
        <input type="text" placeholder="Origin" className="input-origin" ref={originRef}/>
        </Autocomplete>
        <Autocomplete>
        <input type="text" placeholder="Destination" className="input-destination" ref={destiantionRef}/>
        </Autocomplete>
       <button type="button" className="route-place" onClick={calculateRoute}> Route Place</button>&nbsp;&nbsp;&nbsp;&nbsp;
       <h1>Distance = {distance} &nbsp;&nbsp;&nbsp;</h1>
       <h1>Duration = {duration}</h1>
       </div>
    </div>
    
    <GoogleMap
    zoom={15}
    center={center}
    mapContainerClassName="google-map-cont">

        <Marker position={{ lat:  27.712021, lng: 85.312950 }}/>

        {directionsResponse && (
            <DirectionsRenderer directions={directionsResponse} />
          )}
        
    </GoogleMap>
    </div> )
} 

export default ShowMap;

