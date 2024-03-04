import React, { useState } from 'react'
import{computerData} from '../data/computes'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'


const ComputerPage = () => {


  const [selectPro,setSelectPro] =useState([])

  
  
  const companyHandle=(companyName)=>{ 
    if(selectPro.includes(companyName)){ 
       const newArray  = selectPro.filter(item => item !==companyName)  
      setSelectPro(newArray)
    }else{
      selectPro.push(companyName)
      setSelectPro([companyName])
    }
  }
 
  return (
   <>
   <Navbar/>
 <div className='fullpage'>
 
<div className='prod-select' >
 {computerData.map((item ,index)=>{
   return(
     <div  className='pro-input' key={index}>
     <label>
     <input type='checkbox'
     checked = {selectPro.includes(item.company)}
     onChange = {()=>companyHandle(item.company)}> 
     
     
     </input>
     {item.company}
     </label>
     </div>
   )
 })}

   </div>





<div className='pagesSection'>
{ computerData.map((item,index)=>{
return(
 <div key={index}>
 <Link to ={`/computers/${item.id}`}>
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


   </>
  )
}

export default ComputerPage