import { Routes, Route } from "react-router-dom";


import Login from './pages/Login';
import Home from './pages/Home';
import Signup from './pages/Signup';
import ContactUs from './pages/ContactUs';
import AboutUs from './pages/AboutUs';
import Navbar from './components/Navbar';
const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/about" element={<AboutUs />} />
      </Routes>
    </>
  )
}

export default App
