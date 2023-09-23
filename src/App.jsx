import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import SideBar from "./components/SideBar";
import Search from "./components/Search";
import Footer from "./components/Footer";
import Category from "./components/Category";

function App() {
  return (
    <div className="bg-[#15141A] overflow-x-hidden">
      <Router>
        <SideBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Search" element={<Search />} />
          <Route path="/category" element={<Category />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
