import React, { useState } from 'react'

import {mobileData} from '../data/newmobiles'
import {mobileFilters} from '../data/mobileFilters'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'
const Mobilepage = () => {
  const [filter,setFilter] = useState(null);
  const [mobile,setMobile] = useState(false)
  
  const handleMobileNames =()=> {
    return (
      setMobile(true)
    )
  }
  const mobilefilter = mobileFilters.map((item,index)=> item.value)
const mobileDatas= mobileData.map((item)=>item.company)
const sameCompany =mobilefilter ===mobileDatas
console.log("mobileDatas",mobileDatas)
console.log("sameCompany",sameCompany)
  return (
   <>
   <Navbar/>
   <div className="page" style={{display: "flex"}}>
   <div className="sidebar" style={{ width: "20%" }}>
   {mobileFilters.map((item, index) => {
     console.log("item", item);
     return (
       <div key={index}>
         <input type="checkbox" value={item.value} name={item.label}></input>
         <label>{item.label}</label>
         <br></br>
       </div>
     );
   })}
 </div>
 
 <div className="pagesSection">
   {mobileData
     .filter((data) =>
       filter ? mobileFilters.some((item) => item.value === data.company) : true
     )
     .map((item, index) => {
       return (
         <div key={index}>
           <Link to={`/mobiles/${item.id}`}>
             <div className="pageImg">
               <img src={item.image} alt=""></img>
             </div>
           </Link>
           <div className="model">
             {item.company}, {item.model}
           </div>
         </div>
       );
     })}
 </div>;
 
  
  
   </div>
   </>
 )
}
  

export default Mobilepage