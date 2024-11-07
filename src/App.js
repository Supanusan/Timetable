import { React, useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';
import Mainpage from './Components/Mainpage';
import Zoomlink from './Components/Zoomlink';
import Error from './Components/Error';
const App = () => {

  const [Isapproved, setIsapproved] = useState('')

  useEffect(() => {

    localStorage.setItem('approvel key', 'approvelkeybysupanusanRUSL')

    const approved = localStorage.getItem("approvel key")
    if (approved === 'approvelkeybysupanusanRUSL') {
      setIsapproved(approved)
    }


  }, [])


  return (

    <>
      {Isapproved ? (

        < Router >
          <Routes>
            <Route path='/' element={<Mainpage />} />
            <Route path='/Zoomlink' element={<Zoomlink />} />
          </Routes>
        </Router >
      ) :
        <>

          <Error />

        </>}
    </>
  );
};



export default App;
