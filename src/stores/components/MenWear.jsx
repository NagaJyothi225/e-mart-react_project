// import React from 'react'
// import { MenWearData } from '../data/menwear'

// const MenWear = () => {

//   return (
//     <div>
//     {MenWearData.map((item,index)=>{
//         return(
//         <div className='imgbox' key={index}>
//         <img scr= {item.image} alt =''></img>
//         </div>
//         )

//     })}
    
//     </div>
//   )
// }

// export default MenWear

import React from 'react'
import {MenWearData} from '../data/menwear'
const MenWear = () => {
  const firstFiveImages = MenWearData.slice(0,5)
    
  return (
    <>
    <h2 className='h2styles'>Men Wears</h2>
    <div className='computerSection'>
        {firstFiveImages.map((item,index)=>{
            return(
                <div className='imgbox' key={index}>
                    <img className='imagestyles' src={item.image} alt=''></img>
                </div>
            )

        })}
    </div>
    </>
  )
}

export default MenWear