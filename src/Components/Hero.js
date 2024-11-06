import React from 'react'

const Hero = () => {
    return (
        <div className='pt-32'>
            <div id='main' className='py-10 flex justify-center bg-slate-200' >
                <img src='Fristyear.png' alt="" />
            </div>
            <div id='ict' className='py-10 flex justify-center' >
                <img src='ICT.png' alt="" />
            </div>
            <div id='et' className='py-10 flex justify-center bg-slate-200'>
                <img src='ET.png' alt="" />
            </div>
            <div id='bst' className='py-10 flex justify-center'>
                <img src='BST.png' alt="" />
            </div>
        </div>

    )
}

export default Hero;