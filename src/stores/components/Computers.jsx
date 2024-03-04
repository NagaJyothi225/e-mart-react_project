import React from 'react'

import {computerData} from '../data/computes'
const Computers = () => {
    const firstFiveImages = computerData.slice(0,5)
    
  return (
    <>
    <h2 className='h2styles'>Computers</h2>
    <div className='computerSection'>
        {firstFiveImages.map((item,index)=>{
            return(
                <div className='imgbox' key={index}>
                    <img className='imagestyles' src={item.image} alt='Computer Images'></img>
                </div>
            )

        })}
    </div>
    </>
  )
}

export default Computers