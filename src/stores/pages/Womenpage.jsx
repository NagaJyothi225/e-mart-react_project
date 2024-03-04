import React from 'react'
import {womendressesData} from '../data/womendresses'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'
const Womenpage = () => {
    return (
       <>
       <Navbar/>
       <div className='pagesSection'>
       { womendressesData.map((item,index)=>{
        return(
            <div key={index}>
             <Link to ={`/womenwear/${item.id}`}>
             <div className='pageImg' >
             <img src= {item.image} alt=""></img>
             </div>
             </Link>
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
    
export default Womenpage