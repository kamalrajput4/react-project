import React from 'react'
// import Registration from './Registration'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Image from './Image'
import Registration from './Registration'
const App = () => {
  return (
    <div>
      {/* <Registration></Registration> */}


     <BrowserRouter>
     <Routes>

<Route  path="/" element={<Image></Image>}>
<Route path="/regis" element={<Registration></Registration>}></Route>

</Route>



     </Routes>
     
     
     
     </BrowserRouter>
      
    </div>
  )
}

export default App
