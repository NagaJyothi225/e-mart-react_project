import React from 'react'
import {womendressesData} from '../data/womendresses'
const Womendresses = () => {
    const firstFiveImages = womendressesData.slice(0,5)
  return (
    <>
        <h2 className='h2styles'>Women Wear</h2>
        <div className='womenwearSection'>
            {firstFiveImages.map((item,index)=>{
                return(
                    <div className='imgbox' key={index}>
                        <img  className ='imagestyles' src={item.image} alt=""></img>
                    </div>
                )
            }
            )}
        </div>
        </>
  )
}

export default Womendresses