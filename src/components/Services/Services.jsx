import React from 'react'
import './services.css'
import ServiceCard from './ServiceCard'
import { Link } from 'react-router-dom'

const servicecard = [
    {
        cardtitle:"Patient Management System",
        cardcontent:"Patient Management System (PMS) is a versatile patient management software that enable you to micromanage your patients",
        picurl:"https://img.freepik.com/free-vector/senior-professor-lecturing-students-group-classroom_74855-5291.jpg?t=st=1725718408~exp=1725722008~hmac=9ffe03e54e5532f2b58144fe64eb7af726be9095863a54c34f7918c474e4eacf&w=1380",
        linktodirect:"/services/PMF"
    },
    {
        cardtitle:"Hospital Bed Management System",
        cardcontent:"Hospital Bed Management System (HBMS) is a software solution designed to optimize bed distribution in hospital  ",
        picurl:"https://img.freepik.com/free-vector/cartoon-furniture-hospital-ward_107791-1869.jpg?t=st=1725730541~exp=1725734141~hmac=3a88bd211f6693684bf65b89589b3f6da817945b88e27fb94c7018b7a2dfdd0d&w=1380",
        linktodirect:"/services/HBMS"
    },
    {
        cardtitle:"Hospital Ward Management System",
        cardcontent:" Hospital Ward Management System (HWMS) is a softwarre solution designed to optimize and make the management of patient inside the word seemless  ",
        picurl:"https://img.freepik.com/free-vector/doctor-patient-isometric-compositions_1284-20603.jpg?t=st=1725730581~exp=1725734181~hmac=c38d41fc00b689c2d92bd47c606f93eefef9f5f6005d0c3e1a6cca0de53a6878&w=1380",
        linktodirect:"/services/HWMS"
    },
    {
        cardtitle:"E-Prescription System",
        cardcontent:"E-Prescription System (EPS) is a software solution to the make the management drug on the hospital level easier and hassle free ",
        picurl:"https://img.freepik.com/free-vector/telemedicine-online-pharmacy-concept-electronic-health-record-digital-medical-prescription-flat-cartoon-vector-illustration-patient-buys-pills-using-mobile-phone-near-big-laptop-screen_107791-11145.jpg?t=st=1725730630~exp=1725734230~hmac=afee5d5f4cdffddb74f7c2ac31acf3549b39e606ddea65a7a2a741335d7f4d9a&w=1380",
        linktodirect:"/services/EPS"
    },
    {
        cardtitle:"Pharmacy Manager",
        cardcontent:"Pharmacy Manager (PHM) is a software solution designed to manange the drug stock in realtime with restock notifications also to ensure the safe and legal distribution of drugs  ",
        picurl:"https://img.freepik.com/free-vector/tiny-people-doctor-prescribing-medicine-patients-online-online-prescription-system-prescription-management-system-online-pharmacy-concept-pinkish-coral-bluevector-vector-isolated-illustration_335657-1601.jpg?t=st=1725730664~exp=1725734264~hmac=6ebb06eb5339d0d9969745fb0a1f6ad71dc0f29cdc59de2e9f76faa82c0a01f1&w=1060",
        linktodirect:"/services/PHM"
    },
    {
        cardtitle:"Laboratory Management System",
        cardcontent:"Laboratory Management System (LMS) is designed to track the requests made and completed in real time with preconfigured test result templates and automatic report generation ",
        picurl:"https://img.freepik.com/free-vector/medical-scientist-working-science-researching-lab-flat-illustration_74855-10931.jpg?t=st=1725730706~exp=1725734306~hmac=6c1366caae65dcfc7b678e167d273385da98790e5aa64aeafbf045263de42280&w=1380",
        linktodirect:"/services/LMS"
    },

]

function Services() {
  return (
    <>
    <div className=' text-center p-8  ' >
        <h1 className=' w-full capitalize  text-7xl text-blue-950 font-Raleway ' >Our Services for you </h1>
        <h1 className=' w-full capitalize text-4xl text-blue-900 font-Raleway ' >that makes a difference </h1>
    </div>
    

    <div className=' flex justify-center items-center gap-6 flex-wrap py-8 w-screen h-max ' >
        
        {servicecard.map((card)=>{
            return(
                <Link to={card.linktodirect} ><ServiceCard Imgsrc={card.picurl} Title={card.cardtitle} Content={card.cardcontent} /></Link>
            )
        })}
        
    </div>
    </>
  )
}

export default Services