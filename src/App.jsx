import { useState } from 'react'
import './App.css'
import { Navbar } from './components/Navbar'
import { Product } from './components/Product'
import { Cart } from './components/Cart'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MoreProduct from './components/MoreProduct'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Navbar />  
        <Routes>
          <Route path='/' element={<Product />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/moreproduct' element={<MoreProduct/>} />
        </Routes>
        <Product />
      </BrowserRouter>
    </>
  )
}

export default App
