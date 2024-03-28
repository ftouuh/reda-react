import { useState } from 'react'
import { Route , Routes} from 'react-router-dom'
import './App.css'
import List from './components/Employe/ListEmployee'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<List/>}/>
        <Route path='/:name' element={<Detail/>}/>
        <Route path='/add' element=''/>
      </Routes>
    </>
  )
}

export default App
