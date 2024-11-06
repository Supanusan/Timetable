import React from 'react'
import Header from './Header'
import Hero from './Hero'
import Footer from './Footer'

const Mainpage = () => {
    return (
        <>
            <Header />
            <div className='py-8'>
                <Hero />
            </div>

            <Footer />
        </>

    )
}

export default Mainpage