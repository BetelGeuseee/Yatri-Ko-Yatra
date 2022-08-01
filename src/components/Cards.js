import React from 'react'
import CardsItem from './CardsItem'
import './components_css/Cards.css'

const Cards = ()=>{
 
    return(<div className='cards'>
         <h1>Check out these Destinations!</h1>
         <div className='cards__container'>
            <div className='cards__wrapper'>
                <ul className='cards__item'>
                  <CardsItem src='images/travelpic1.jpg'
                  text='Vishnu temple, sacred to both Hindus and Buddhist, located in Muktinath Valley'
                   label='Muktinath'
                   path='/blogs'/>
                   <CardsItem src='images/travelpic2.jpg'
                  text='Explore alpine fresh water oligotrophic lake, located at an elevation of 3,6115.5m'
                   label='Shey Phoksundo'
                   path='/blogs'/> 
                   <CardsItem src='images/travelpic6.jpg'
                  text='Trek till the everest base camp '
                   label='EBC'
                   path='/blogs'/>  
                </ul>
                <ul className='cards__item'>
                  <CardsItem src='images/travelpic3.jpg'
                  text='Paragliding is one of the most popular adventure activities in Pokhara.'
                   label='Pokhara'
                   path='/blogs'/>
                   <CardsItem src='images/travelpic4.jpg'
                  text='Experience the 70 meters high bungee jumping in Pokhara.'
                   label='Pokhara'
                   path='/blogs'/> 
                     <CardsItem src='images/travelpic5.jpg'
                  text='Trek till the annapurna base camp'
                   label='ABC'
                   path='/blogs'/>  
                </ul>
              
            </div>
         </div>
    </div>)


}
export default Cards