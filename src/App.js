import "./App.css";
import { Routes, Route } from "react-router-dom";

import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
import Cart from "./Components/Cart/Cart";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>

      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Home />} />

        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
