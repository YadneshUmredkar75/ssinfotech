import { Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home"; // ✅ import Home properly
import TrainingAndPlacements from "./pages/TrainingAndPlacement";

function App() {
  return (
    <div className="app">
      <Navbar />
      <main className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/training" element={<TrainingAndPlacements />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
