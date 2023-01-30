import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AddContact from '../components/AddContact/AddContact'
import EditContact from '../components/EditContact/EditContact'
import Home from '../components/Home/Home'
import NavBar from '../components/NavBar'

const LayoutRoutes = () => {
  return (
    <div>
        
       <NavBar/>  
        <Routes>
<Route path='/react-redux-contact-app' element={<Home/>} />
<Route path='/add' element={<AddContact/>} />
<Route path='/edit/:id'  element={<EditContact/>} />


        </Routes>
        </div>
  )
}

export default LayoutRoutes