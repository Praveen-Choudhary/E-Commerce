import React from 'react'
import Cart from './pages/Cart'
import HomePage from './pages/HomePage'
import Login from './pages/Login'
import Product from './pages/Product'
import ProductList from './pages/ProductList'
import Register from './pages/Register'


import{ BrowserRouter as Router, Routes, Route, Navigate, Link, Outlet, useParams, NavLink } from 'react-router-dom'

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/productlist' element ={<ProductList/>}/>
          <Route path='/product' element={<Product/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/cart' element={<Cart/>}/>
        </Routes>
      </Router>
      
      
    </div>
  )
}

export default App