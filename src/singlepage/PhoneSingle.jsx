import React from 'react'
import { mobileData } from '../stores/data/newmobiles'
import { useParams } from 'react-router-dom'
import Navbar from '../stores/components/Navbar'
const PhoneSingle = () => {

    const {id} =useParams()
    const pro_items = mobileData.find((item)=>item.id == id)


console.log(id)
  return (
   <>
   <Navbar/>
   <div className='ind-page'>
   <div className='ind-img'>
   <img src= {pro_items.image}></img>
   </div>
   <div className='ind-details'>
   <div className='ind-com'>
   <h2>{pro_items.company}</h2></div>
   <div className='ind-model'>
   <h2>{pro_items.model}</h2>
   </div>
   <div className='ind-price'>
<h3>{pro_items.price}</h3>
</div>
   <div className='ind-desc'>
   <p>{pro_items.description}</p>
   </div>
   <button>Add to Cart</button>
   </div>
   
   </div>
   </>
  )
}

export default PhoneSingle