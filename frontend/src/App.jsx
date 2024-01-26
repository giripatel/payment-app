import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import {Signin,Signup, Dashboard} from './components/index'
import UserSearch from './components/UserSearch'
import MoneySender from './components/MoneySender'
function App() {
  const [ count, setCount ] = useState( 0 )

  return (
    <div>
      {/* <BrowserRouter>
        <Routes> */}
          {/* <Route path='/singup' element={ <Signup /> } /> */}
          {/* <Route path='/singin' element={ <Signin /> } /> */}
          {/* <Route path='/dashborad' element={ <Dashborad /> } /> */}
        {/* </Routes>
      </BrowserRouter> */}
      {/* <Signup /> */}
      {/* <Signin/> */}
      {/* <Dashboard/> */}
      {/* <UserSearch/> */}
      <MoneySender/>
    </div>
  )
}

export default App
