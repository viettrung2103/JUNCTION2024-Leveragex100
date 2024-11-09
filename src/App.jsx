import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import AppLayout from "./components/AppLayout";
import Employee from "./pages/Employee";
import Company from "./pages/Company";
import Home from "./pages/Home";
import { CompanyLayout } from "./components/BodyLayout";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
// import Employee from "./pages/Employee";

function App() {
  return (
    <div className="container">
      <Navbar />
      <Company />
      <Footer />
      {/* <Router>
        <Routes>

          <Route path="/" element={<AppLayout />}>
            <Route index element={<Home />} />
            <Route path="companies" element={<CompanyLayout />}>
              <Route index element={<Company />} />
            </Route>
          </Route>
        </Routes>
      </Router> */}
    </div>
  );
}

export default App;
