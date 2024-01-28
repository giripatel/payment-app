import { useState } from 'react'
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import {Signup,Signin, Dashboard} from './components/index'
import MoneySender from './components/MoneySender'
import { RecoilRoot } from 'recoil';

function App() {
  const [ count, setCount ] = useState( 0 )

  return (
    <>
      <BrowserRouter>
      <RecoilRoot>
        <Routes> 
          <Route path="/signup" element={<Signup />} />
          <Route path='/signin' element={ <Signin /> } />
          <Route path='/dashboard' element={ <Dashboard /> } /> 
          <Route path='/send' element={ <MoneySender /> } /> 
        </Routes>
        </RecoilRoot>
      </BrowserRouter>

    </>
  )
}

export default App
