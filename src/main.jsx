import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Contact from './components/Contact/Contact.jsx'

import SignIn from './components/SignIn/SignIn.jsx'
import Hospital from './components/Hospital/Hospital.jsx'
import One from './components/Pageno1/one.jsx'
import AIIMS from './components/Hospital Appointment/Hospital Details/AIIMS.jsx'
import Dashboard from './components/Profile/Dashboard.jsx'
import RML from './components/Hospital Appointment/Hospital Details/RML.jsx'
import Apollo from './components/Hospital Appointment/Hospital Details/Apollo.jsx'
import Deen_Dayal from './components/Hospital Appointment/Hospital Details/Deen_Dayal.jsx'




const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path='/' element={ <App/> } >
        <Route path='home' element={<Home/>} />
        <Route path='about' element={<About/>} />
        <Route path='contact' element={<Contact/>} />
        <Route path='register' element={<SignIn/>} />
        <Route path='Hospitals' element={<Hospital/>} />
        <Route path='/Hospitals/AIIMS' element={<AIIMS/>} />
        <Route path='/Hospitals/RML Hospital' element={<RML/>} />
        <Route path='/Hospitals/Safdarjung Hospital' element={<AIIMS/>} />
        <Route path='/Hospitals/Apollo Hospital' element={<Apollo/>} />
        <Route path='/Hospitals/Fostis' element={<Deen_Dayal/>} />
        <Route path='/profile' element={<Dashboard/>} />

      </Route>
      
    </>
    
  )
)
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
