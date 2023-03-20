
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

import { Route, Routes } from 'react-router-dom'
import ItemDetails from './pages/ItemDetails'
import Home from './pages/Home'

function App() {
  const [post, setPosts] = useState([])
  return (
    <Routes>
      <Route path='/' element = {<Home/>}></Route>
      <Route path='/products/:id' element = {<ItemDetails/>}></Route>
    </Routes>
  )
}

export default App