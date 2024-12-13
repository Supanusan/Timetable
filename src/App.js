import { React } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Mainpage from "./Components/Mainpage";
import Zoomlink from "./Components/Zoomlink";
import Login from "./Components/Login";
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Main" element={<Mainpage />} />
        <Route path="/Zoomlink" element={<Zoomlink />} />
      </Routes>
    </Router>
  );
};

export default App;
