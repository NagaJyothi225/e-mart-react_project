import React, { useState } from 'react'
import { watchesData } from '../data/watches'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'
import { mobileData } from '../data/newmobiles'
// import {watchData} from '../data/watches'

const WatchesPage = () => {

  const [selectPro,setSelectPro] =useState([])
 
  const  companyNames = (applewatch)=>{
    if (selectPro.includes(applewatch)){
      setSelectPro(selectPro.filter(item=> item !== applewatch))
    }else{
      setSelectPro([ ...selectPro,applewatch])
// using spread operater

    }}
   const filteredproduct = selectPro.length===0? watchesData:watchesData.filter((aplwatch)=>selectPro.includes(aplwatch.brand))
  return (
   <>
   <Navbar/>
   <div className='fullpage'>
   <div className='pro-selected'>
   {watchesData.map((product)=>{
   return(
    <div className='pro-input'>
    <label>
    <input type='checkbox'  checked ={selectPro.includes(product.brand)}
    onChange={()=> companyNames(product.brand)}
    >
  
    </input>
    {product.brand}
    </label>
    </div>
   )

   })}
   </div>
   <div className='pagesSection'>
   {filteredproduct.map((item,index)=>{
       return(
           <div key={index}>
          <Link to={`/watches/${item.id}`}>
          <div className='pageImg'>
          <img src= {item.image} alt=''></img>
          </div>
          </Link>
           <div  className='model'>
           {item.brand},{item.model}
           </div>
           </div>
       )
   })}
   </div>


   </div>
   </>
  )
}


export default WatchesPage