import React, { useEffect, useState } from 'react'
import Header from './Header'
import Hero from './Hero'
import Footer from './Footer'

const Mainpage = () => {
const [Isapproved, setIsapproved] = useState(false)

  useEffect(() => {
    const approved = localStorage.getItem("valid")
    if (approved === 'authorizeduser') {
      setIsapproved(true)
    }
  }, [])
    return (
        <div>
        {Isapproved && (<div>
            <Header />
            <div className='py-8'>
                <Hero />
            </div>

            <Footer />
        </div>)}
</div>
    )
}

export default Mainpage