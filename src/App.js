import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Speakers from "./components/Speakers";
import Schedule from "./components/Schedule";
import Partners from "./components/Partners";
import Footer from "./components/Footer";
import SeatSelection from "./components/SeatSelection";
import Contact from "./components/contact";
import Passes from "./components/Passes";
import Sponsors from "./components/Sponsors";
import PaymentPage from "./components/Payment";
const App = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="pt-14 flex-grow ">
          {" "}
          {/* Add padding to avoid overlap with fixed header */}
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Hero />
                  <Speakers />
                  <Schedule />
                  {/* <Partners /> */}
                  <Sponsors></Sponsors>
                  <About />
                </>
              }
            />
            <Route path="/about" element={<About />} />
            <Route path="/speakers" element={<Speakers />} />
            <Route path="/schedule" element={<Schedule />} />{" "}
            {/* Add this line for Schedule */}
            <Route path="/partners" element={<Partners />} />{" "}
            {/* Add this line for Partners */}
            <Route path="/select-seats" element={<SeatSelection />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/passes" element={<Passes />} />{" "}
            <Route path="/payment" element={<PaymentPage />} />{" "}
            {/* Add this line for Passes */}
            <Route path="*" element={<h1>404 Not Found</h1>} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
