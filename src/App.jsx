import { useState } from 'react'
import Layout from './Components/Layout'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import './App.css'
import Home from './Components/Home'
import About from './Components/About'
import Shop from './Components/Shop'
import Contact from './Components/Contact'
import Singlecategory from './Components/Singlecategory'
import Singleproduct from './Components/Singleproduct'


function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout/>}>
        <Route path='' element={<Home/>}/>
        <Route path='about' element={<About/>}/>
        <Route path='shop' element={<Shop/>}/>
        <Route path='contactus' element={<Contact/>}/>
        <Route path='category/:name' element={<Singlecategory/>}/>
        <Route path='products/:id' element={<Singleproduct/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App