import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './SignIn.css'
const SignInOrg = () => {

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
            <h1 className=' mt-5 capitalize ' >Login to continue enjoying our services</h1>
            <form className='  flex flex-col text-xl font-sans font-bold text-white w-[80%] gap-6 mt-8  ' >
                <input  className=' h-[3rem] px-4 rounded-xl bg-gray-800 outline-none ' placeholder='Organisation' type="text" name='Name' />
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
            <h1 className=' mt-5 capitalize  ' > Register  to make management hassle free</h1>
            <form className='  flex flex-col text-xl font-sans font-bold text-white w-[80%] gap-6 mt-8  ' >
                <input  className=' h-[3rem] px-4 rounded-xl bg-gray-800 outline-none ' placeholder='Organisation' type="text" name='Name' />
                <input className='h-[3rem] px-4 rounded-xl bg-gray-800 outline-none ' placeholder='Primary Email' type="email" name='email' />
                <input className=' h-[3rem] px-4 rounded-xl bg-gray-800 outline-none ' placeholder='Password' type="password" name='password' />
                <input className=' h-[3rem] px-4 rounded-xl bg-gray-800 outline-none ' placeholder='Primary Ph. No' type="text" name='phone' />
                <button className=' w-[6rem] h-[3rem] bg-blue-900 rounded-3xl ' >Register</button>
                
            </form>
            <button onClick={loginConst} className=' p-4 text-black ' >Already registered ?? Login here</button>

            <form >

            </form>
        </div>
    </div>
  );
};

export default SignInOrg ;
