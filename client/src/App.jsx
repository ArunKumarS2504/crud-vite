import { useState } from 'react'
import { BrowserRouter,Routes, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import Users from './Users'
import UpdateUser from './UpdateUser'
import CreateUser from './CreateUser'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
     <BrowserRouter>
     <Routes>
        <Route path='/' element={<Users/>}/>
        <Route path='/create' element={<CreateUser/>}/>
        <Route path='/update' element={<UpdateUser/>}/>
     </Routes>
     </BrowserRouter> 
    </>
  )
}

export default App
