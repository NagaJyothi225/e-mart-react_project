import React from 'react'
import { MenWearData } from '../data/menwear'
import Navbar from '../components/Navbar'

const Menpage = () => {
  return (
    <>
    <Navbar/>
    <div className='pagesSection'>
   { MenWearData.map((item,index)=>{
    return(
        <div key={index}>
         <div className='pageImg' >
         <img src= {item.image} alt=""></img>
         </div>
         <div className='model'>
         {item.brand},{item.model}
         </div>
         </div>
     )
 })}
    </div>
    </>
  )
}

export default Menpage