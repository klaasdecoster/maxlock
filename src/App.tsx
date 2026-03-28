/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import StorageOptions from "./pages/StorageOptions";
import Pricing from "./pages/Pricing";
import Security from "./pages/Security";
import Location from "./pages/Location";
import About from "./pages/About";
import Contact from "./pages/Contact";

export default function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/opslagopties" element={<StorageOptions />} />
            <Route path="/prijzen" element={<Pricing />} />
            <Route path="/beveiliging" element={<Security />} />
            <Route path="/locatie" element={<Location />} />
            <Route path="/over-maxlock" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

