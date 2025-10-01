import { Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home"; // ✅ import Home properly
import TrainingAndPlacements from "./pages/TrainingAndPlacement";
import Jobs from "./pages/Jobs";
import './global.css'
import Placements from "./pages/Placement";


import Services from "./components/Services";

import AboutUs from "./pages/AboutUs";
import ServicePage from "./pages/ServicePage";
import ContactPage from "./pages/ContactUs"
import Gallery from "./pages/Gallary";


function App() {
  return (
    <div className="app">
      <Navbar />
      <main className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/training" element={<TrainingAndPlacements />} />
          <Route path="/serach-jobs" element={<Jobs/>} />
          <Route path="/placements" element={<Placements/>}/>
          <Route path="/gallary" element={<Gallery/>} />

          <Route path="/about" element={<AboutUs />} />
          <Route path="/services" element={<ServicePage/>} />
          <Route path="/contact" element={<ContactPage/>} />

        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
