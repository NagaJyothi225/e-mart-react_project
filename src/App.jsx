import React from 'react'
import { Routes,Route,} from 'react-router-dom'
import './App.css'
import LandingPage from './stores/pages/LandingPage'
// import Mobilepage from './stores/pages/Mobilepage'
import ComputerPage from './stores/pages/ComputerPage'
import WatchesPage from './stores/pages/WatchesPage'
import Menpage from './stores/pages/Menpage'
import Womenpage from './stores/pages/Womenpage'
import Products from './stores/components/Products'
// import MobileSingle from './singlepage/PhoneSingle'
import CompSinglePage from './singlepage/CompSinglePage'
import PhonesPage from './stores/pages/PhonePage'
import PhoneSingle from './singlepage/PhoneSingle'
import WatchesSinglePages from './singlepage/WatchesSinglePages'
import WomensinglePage from './singlepage/WomensinglePage'


const App = () => {
  return (
    
    <Routes>
    
    <Route path='/' element={ < LandingPage/>}>
    </Route>
      <Route path='/phones' element={ <PhonesPage/>}/>
      <Route path='/products' element={<Products/>}/>
      <Route path='/computers' element={<ComputerPage/>}/>
      <Route path='/watches' element={<WatchesPage/>}/>
      <Route path='/menwear' element={<Menpage/>}/>
      
      <Route path='/womenwear' element={<Womenpage/>}/>
    
     <Route path='/phones/:id' element={<PhoneSingle/>}/>
    <Route path='/computers/:id' element={<CompSinglePage/>}/>
   <Route path='/watches/:id' element={<WatchesSinglePages/>}/>
   <Route path ='/womenwear/:id' element ={< WomensinglePage/>}/>

    </Routes>  
  
  )
}

export default App
 // <Route path='/mobiles/:id' element={<MobileSingle/>}/>