import React from 'react'

import {watchesData} from '../data/watches'

const Watches = () => {
    const firstFiveImages = watchesData.slice(0,5)
  return (
   <div>
   <h2 className='h2styles'> Watches</h2>

   <div className='watchesSection'>
    {firstFiveImages.map((item,index)=>{
        return(
            <div className='imgbox' key={index}>
    <img className='imagestyles' src={item.image} alt=''></img>
    </div>
        )
    })}
    
    </div>
   </div>
  )
}

export default Watches