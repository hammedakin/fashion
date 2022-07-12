import { Route, Routes } from "react-router-dom"
import './App.css';
import './Components/Gallery/Gallery.css'
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer";
import './Components/Home/Homepage.css'
import Navbar from './Components/Navbar'
import Gallery from "./Pages/Gallery";
import Home from "./Pages/Home"
import GalleryDetails from "./Components/Gallery/GalleryDetails";
import Testing from "./Components/Testing/Testing";
function App() {
  return (
    <>
    <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/gallery/:id" element={<GalleryDetails />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/test" element={<Testing />} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
