import React from 'react'
import {mobileData} from '../data/newmobiles'

const Phones = () => {
    const firstFiveImages = mobileData.slice(0,5) 

return (

    <div>
    <h2 className='h2styles'>Mobiles</h2>
        <div className='mobileSection'>
            {firstFiveImages.map((item,index)=>{
                return(
                    <div className='imgbox' key={index}>
                        <img  className ='imagestyles' src={item.image} alt="Mobiles"></img>
                    </div>
                )
            }
            )}
        </div>
    </div>
)
}   

export default Phones