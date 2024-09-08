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
import ToggleBtwSignIn from './components/SignIn/ToggleBtwSignIn.jsx'
import SignInOrg from './components/SignIn/Joinascompany.jsx'
import Services from './components/Services/Services.jsx'
import EPS from './components/Services/EPS/EPS.jsx'
import HBMS from './components/Services/HBMS/HBMS.jsx'
import HWMS from './components/Services/HWMS/HWMS.jsx'
import LMS from './components/Services/LMS/LMS.jsx'
import PHM from './components/Services/PHM/PHM.jsx'
import PMF from './components/Services/PMF/PMF.jsx'






const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path='/' element={ <App/> } >
        <Route path='home' element={<Home/>} />
        <Route path='about' element={<About/>} />
        <Route path='contact' element={<Contact/>} />
        <Route path='register' element={<ToggleBtwSignIn/>} />
        <Route path='Hospitals' element={<Hospital/>} />
        <Route path='/Hospitals/AIIMS' element={<AIIMS/>} />
        <Route path='/Hospitals/RML Hospital' element={<RML/>} />
        <Route path='/Hospitals/Safdarjung Hospital' element={<AIIMS/>} />
        <Route path='/Hospitals/Apollo Hospital' element={<Apollo/>} />
        <Route path='/Hospitals/Fostis' element={<Deen_Dayal/>} />
        <Route path='/profile' element={<Dashboard/>} />
        <Route path='/oraganisationsignin' element={<SignInOrg/>} />
        <Route path='/usersignin' element={<SignIn/>} />
        <Route path='/services' element={<Services/>} />
        <Route path='/services/EPS' element={<EPS/>} />
        <Route path='/services/HBMS' element={<HBMS/>} />
        <Route path='/services/HWMS' element={<HWMS/>} />
        <Route path='/services/LMS' element={<LMS/>} />
        <Route path='/services/PHM' element={<PHM/>} />
        <Route path='/services/PMF' element={<PMF/>} />


      </Route>
      
    </>
    
  )
)
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
