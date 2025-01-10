import React, { useEffect, useState } from "react";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import Footer from "./Components/Footer";

const Mainpage = () => {
  const [Isapproved, setIsapproved] = useState(false);

  useEffect(() => {
    const approved = localStorage.getItem("valid");
    if (approved === "authorizeduser") {
      setIsapproved(true);
    }
  }, []);
  return (
    <div>
      {Isapproved && (
        <div>
          <Header />
          <div className="py-8">
            <Hero />
          </div>

          <Footer />
        </div>
      )}
    </div>
  );
};

export default Mainpage;
