import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import AppLayout from "./components/AppLayout";
import Employee from "./pages/Employee";
import Company from "./pages/Company";
import Home from "./pages/Home";
import { CompanyLayout } from "./components/BodyLayout";
// import Employee from "./pages/Employee";

function App() {
  return (
    <>
      <Router>
        <Routes>
          {/* <Route path="/" element={<Employee />} /> */}
          <Route path="/" element={<AppLayout />}>
            <Route index element={<Home />} />
            <Route path="companies" element={<CompanyLayout />}>
              <Route index element={<Company />} />
            </Route>
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
