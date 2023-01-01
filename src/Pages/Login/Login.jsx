import React from 'react'
import styles from './styles.module.css';
import {FcGoogle} from 'react-icons/fc';
const Login = () => {
  return (
    <div className={`${styles.container}`}>
      <div className = "text-white backdrop-blur-sm bg-black/60 md:absolute md:top-[16%] md:left-[55%] md:w-[38%] md:h-[67%] rounded-3xl p-10">
        <p className='text-4xl mb-[12%] font-bold'>Lost in the<br/>Rhythm</p>
        <p className='text-2xl mb-[10%]'>Do You have what it takes <br/>to be the Best?</p>
        <button className="flex items-center md:ml-5 hover:bg-black/50 p-5 rounded-2xl"><FcGoogle size={26}/><span className="ml-5 font-light text-xl">Sign in with Google </span></button>
      </div>
    </div>
  )
}

export default Login;