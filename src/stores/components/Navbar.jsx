import React from 'react'
// import ComputerPage from '../pages/ComputerPage';

import { Link } from 'react-router-dom'
const Navbar = () => {

  return (
    <div>
    <div className='navbarSection'>
        <div className='title'>
        <Link to='/'><h2 style={{color:'white'}}>E-Mart</h2></Link> </div>
            <div className='Search'>
                <input type='text' placeholder='Search....'/>
            </div>
            <div className='user'>
                <div className='user-details'> SignIN/SignUP</div>
                <div className='cart'>Cart</div>
            </div>
             </div>
            
             <div  className='subMenu'  >
            <ul>
            <Link to='/computers'><li style={{ color: 'white' }}>Computers</li></Link>
            <Link to='/phones'><li style={{color:'white'}}>Phones</li></Link>
            
            <Link to='/watches'> <li style={{color:'white'}}>Watches</li></Link>
           
            <Link to='/womenwear' ><li style={{color:'white'}}>Women Wear</li></Link>
            
            <Link to='/menwear'><li style={{color:'white'}}>Men Wear</li></Link>
            
            </ul>
            </div>
            </div>
  )
}

export default Navbar