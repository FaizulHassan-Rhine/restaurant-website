import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./Components/Header/Header";
import Blog from "./Components/Blog/Blog";
import Navbar from "./Components/Navbar/Navbar";
import HomeBanner from "./Components/HomeBanner/HomeBanner";
import Home from "./Components/Home.js/Home";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path="/home" element={<HomeBanner />} />
        <Route path="/" element={<HomeBanner />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </div>
  );
}

export default App;
