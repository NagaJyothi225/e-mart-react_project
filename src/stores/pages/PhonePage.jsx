import React from 'react'
import {mobileData} from '../data/newmobiles'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'
const PhonesPage = () => {
  return (
   <div>
   <Navbar/>
   <div className='pagesSection'>
   { mobileData.map((item,index)=>{
    return(
        <div key={index}>
        <Link to ={`/phones/${item.id}`}>
         <div className='pageImg' >
         <img src= {item.image} alt=""></img>
         </div>
         </Link>
         <div className='model'>
         {item.company},{item.model}
         </div>
         </div>
     )
 })}
    </div>
   </div>
  )
}

export default PhonesPage