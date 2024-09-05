import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaGooglePlusG, FaFacebookF, FaGithub, FaLinkedinIn } from 'react-icons/fa';
import './SignIn.css'
const SignIn = () => {

    const [registerindex , setregisterIndex] = useState(0)
    const [loginindex , setloginIndex] = useState(1)

    const loginConst = ()=>{
        setloginIndex(11)
        setregisterIndex(-1)
    }

    const registerConst = ()=>{
        setloginIndex(-1)
        setregisterIndex(11)

    }

  return (
    <div className='wrapper' >
        <div className={` z-[${loginindex}]   transition-all ease-in-out duration-500 login flex flex-col  items-center absolute /*rotate-y-180*/  transform-style-3d  w-[30rem] h-[35rem] bg-white rounded-3xl  `} >
            <h1 className=' font-Raleway text-2xl pt-6 text-blue-600 ' >Welcome Back !!</h1>
            <h1 className=' mt-5 ' >use these social media to login to your account</h1>
            <div className=' mb-5 mt-5 justify-center items-center logo  flex gap-4  ' >
                <Link className=' border-x-2 border-y-2 rounded-md  border-gray-800 px-2 py-1 ' ><FaGooglePlusG/></Link>
                <Link className=' border-x-2 border-y-2 rounded-md border-gray-800 px-2 py-1 ' ><FaFacebookF/></Link>
                <Link className=' border-x-2 border-y-2 rounded-md border-gray-800 px-2 py-1 ' ><FaGithub/></Link>
                <Link className=' border-x-2 border-y-2 rounded-md border-gray-800 px-2 py-1 ' ><FaLinkedinIn/></Link>
            </div>
            <h1>or use your email to login</h1>
            <form className='  flex flex-col text-xl font-sans font-bold text-white w-[80%] gap-6 mt-8  ' >
                <input  className=' h-[3rem] px-4 rounded-xl bg-gray-800 outline-none ' placeholder='Name' type="text" name='Name' />
                <input className='h-[3rem] px-4 rounded-xl bg-gray-800 outline-none ' placeholder='Email' type="email" name='email' />
                <input className=' h-[3rem] px-4 rounded-xl bg-gray-800 outline-none ' placeholder='Password' type="password" name='password' />
                <button className=' w-[6rem] h-[3rem] bg-blue-900 rounded-3xl ' >LogIn</button>
                
            </form>
            <button onClick={registerConst} className=' p-4 text-black ' >New here ? Register First</button>

            <form >

            </form>
        </div>
        <div className={` z-[${registerindex}] register flex flex-col  items-center absolute /*rotate-y-180*/  transform-style-3d  w-[30rem] h-[35rem] bg-white rounded-3xl  `} >
            <h1 className=' font-Raleway text-2xl pt-6 text-blue-600 ' >Hello !!</h1>
            <h1 className=' mt-5 ' >use these social media to register your account</h1>
            <div className=' mb-5 mt-5 justify-center items-center logo  flex gap-4  ' >
                <Link className=' border-x-2 border-y-2 rounded-md  border-gray-800 px-2 py-1 ' ><FaGooglePlusG/></Link>
                <Link className=' border-x-2 border-y-2 rounded-md border-gray-800 px-2 py-1 ' ><FaFacebookF/></Link>
                <Link className=' border-x-2 border-y-2 rounded-md border-gray-800 px-2 py-1 ' ><FaGithub/></Link>
                <Link className=' border-x-2 border-y-2 rounded-md border-gray-800 px-2 py-1 ' ><FaLinkedinIn/></Link>
            </div>
            <h1>or use your email to Register</h1>
            <form className='  flex flex-col text-xl font-sans font-bold text-white w-[80%] gap-6 mt-8  ' >
                <input  className=' h-[3rem] px-4 rounded-xl bg-gray-800 outline-none ' placeholder='Name' type="text" name='Name' />
                <input className='h-[3rem] px-4 rounded-xl bg-gray-800 outline-none ' placeholder='Email' type="email" name='email' />
                <input className=' h-[3rem] px-4 rounded-xl bg-gray-800 outline-none ' placeholder='Password' type="password" name='password' />
                <button className=' w-[6rem] h-[3rem] bg-blue-900 rounded-3xl ' >Register</button>
                
            </form>
            <button onClick={loginConst} className=' p-4 text-black ' >Already registered ?? Login here</button>

            <form >

            </form>
        </div>
    </div>
  );
};

export default SignIn ;
