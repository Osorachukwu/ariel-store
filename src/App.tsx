import { useState } from "react";
import "./App.css";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Electronics from "./pages/Electronics";
import Jewery from "./pages/Jewery";
import Mens from "./pages/Mens";
import Womens from "./pages/Womens";
import SingUp from "./components/SingUp";
import Singin from "./components/Singin";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/electronics" element={<Electronics />} />
          <Route path="/jewery" element={<Jewery />} />
          <Route path="/mens-clothing" element={<Mens />} />
          <Route path="/womens-clothing" element={<Womens />} />
          <Route path="/sign-up" element={<SingUp />} />
          <Route path="/sign-in" element={<Singin />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
