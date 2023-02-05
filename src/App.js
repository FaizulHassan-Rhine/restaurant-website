import "./App.css";
import { Routes, Route } from "react-router-dom";

import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
import Cart from "./Components/Cart/Cart";
import NotFound from "./Components/NotFound/NotFound";
import Login from "./Components/Login/Login";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>

      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Home />} />

        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
