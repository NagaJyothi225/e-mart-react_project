import React from 'react'
// import {watchesData} from  '../data/watches'

import { watchesData } from '../stores/data/watches'
import { useParams } from 'react-router-dom'
import Navbar from '../stores/components/Navbar'
const WatchesSinglePages = () => {
    const {id}=useParams()
    const watch_item = watchesData.find((item)=>item.id ==id)
   console.log(id)
  return (
   <>
   <Navbar/>
   <div className='ind-page'>
   <div className='ind-img'>
   <img src= {watch_item.image}></img>
   </div>
   <div className='ind-details'>
  <div className='ind-com'>
  <h2>{watch_item.brand}</h2>
  </div>
  <div className='ind-model'>
  
  <h2>{watch_item.model}</h2></div>
  <div className='ind-price'>
  <h3>{watch_item.price}</h3></div>
  <div className='ind-desc'>
  <p>{watch_item.description}</p>
  </div>
  <button>Add to Cart</button>
  </div>

   </div>

   </>
  )
}

export default WatchesSinglePages