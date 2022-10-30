import React from "react";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useEffect ,useState} from "react";
import { db } from "../fire";
import { collection,onSnapshot } from "firebase/firestore";
import '../components/components_css/AgencySlider.css';

const AgencySlider = ()=>{
    const [agencies,setAgencies] = useState([]);

    useEffect(()=>{

        const agencyRef  = collection(db,'agencies');
        onSnapshot(agencyRef,(snapshot)=>{
          const agencies = snapshot.docs.map((doc)=>({
            id: doc.id,
            ...doc.data(),
          }))
          setAgencies(agencies);
        })
    },[])

    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              dots: true,
            },
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              initialSlide: 1,
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
      };
      
      function renderFunc(post){
            

        return (
            <div className="appy">
        <div className="c-card">
        <div className="c-card-top">
          <img
            src={post.profileImage}/>
          <h1>{post.agencyName}</h1>
        </div>
        <div className="c-card-bottom">
          <h3>Rating = {post.rating} Star</h3>
          <span className="c-category">{post.agencyLocation}</span>
        </div>
      </div>
      </div> )
      }
    return (<div>

<Slider {...settings}>
        {agencies.map(renderFunc)}
      </Slider>
    </div>)
}

export default AgencySlider;