import React from 'react'
import { FaRegSadTear } from "react-icons/fa";

const Error = () => {
    return (
        <div className='flex flex-col justify-center items-center h-screen w-full text-9xl sm:text-center '>
            <FaRegSadTear />
            <h1 className='text-yellow-400'>Your are not verified user !</h1>
            <h1>Please Contact <a href="https://supanusan.netlify.app/">Admin</a></h1>
        </div>
    )
}

export default Error