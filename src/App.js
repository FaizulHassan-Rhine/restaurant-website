import "./App.css";
import { Routes, Route } from "react-router-dom";
// import Header from "./Components/Header/Header";
import Blog from "./Components/Blog/Blog";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home.js/Home";
import AboutUs from "./Components/AboutUs/AboutUs";
import Footer from "./Components/Home.js/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/about" element={<AboutUs />} />
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
