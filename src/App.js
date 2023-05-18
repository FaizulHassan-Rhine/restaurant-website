import "./App.css";
import { Routes, Route } from "react-router-dom";

import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
import Cart from "./Components/Cart/Cart";
import NotFound from "./Components/NotFound/NotFound";
import Login from "./Components/Login/Login";
import SignUp from "./Components/Login/SignUp";
import Scroll from "./Components/Scroll/Scroll";
import PrivacyPolicy from "./Components/PrivacyPolicy/PrivacyPolicy";
import TermsCondition from "./Components/TermsCondition/TermsCondition";
import CookiePolicy from "./Components/CookiePolicy/CookiePolicy";
import ContactUs from "./Components/ContactUs/ContactUs";
import Navbar2 from "./Components/Navbar/Navbar2";

function App() {
  return (
    <div className="App">
      <Scroll></Scroll>
      <Navbar2 />
      {/* <Navbar></Navbar> */}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="*" element={<NotFound></NotFound>}></Route>
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-condition" element={<TermsCondition />} />
        <Route path="/cookie" element={<CookiePolicy />} />
        <Route path="/contact-us" element={<ContactUs />} />
      </Routes>
    </div>
  );
}

export default App;
