import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import ChargerPage from '../Pages/ChargerPage'
import LoginPage from '../Pages/LoginPage'
import RegisterPage from '../Pages/RegisterPage'
import AboutUsPage from '../Pages/AboutUsPage'
import Faq from '../Pages/Faq'
import AddChargerPage from '../Pages/AddChargerPage'

function Router() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='' element={<ChargerPage/>}/>
            <Route path='/login' element={<LoginPage/>}/>
            <Route path='/signup' element={<RegisterPage/>}/>
            <Route path='/about' element={<AboutUsPage/>}/>
            <Route path='/help' element={<Faq/>}/>
            <Route path='/add' element={<AddChargerPage/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default Router