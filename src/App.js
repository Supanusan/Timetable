import { React } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Pages/Login";
import Mainpage from "./Pages/Mainpage";
import Zoomlink from "./Pages/Zoomlink";
import AllLink from "./AllLinkPage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Main" element={<Mainpage />} />
        <Route path="/Zoomlink" element={<Zoomlink />} />
        <Route path="/AllLink" element={<AllLink />} />
      </Routes>
    </Router>
  );
};

export default App;
