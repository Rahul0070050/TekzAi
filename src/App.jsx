import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Services from "./pages/Services/Services";
import Products from "./pages/Products/Products";
import Contact from "./pages/Contact/Contact";
import Popup from "./components/PopUp";
import styles from "./components/Popup.module.css";
import popup from "./assets/popup.jpg";
import ServicesDetails from "./pages/ServicesDetails/ServicesDetails";

function App() {
  const [isPopupOpen, setPopupOpen] = useState(false);

  // Show the popup on page load
  useEffect(() => {
    setPopupOpen(true);
  }, []);

  return (
    <div className="app-container">
      <Router>
        <Navbar />
        <div className="content">
          <Popup isOpen={isPopupOpen} onClose={() => setPopupOpen(false)}>
            <img src={popup} alt="Popup" className={styles.popupImage} />
          </Popup>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/service-details" element={<ServicesDetails />} />
            <Route path="/products" element={<Products />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
}
export default App;
