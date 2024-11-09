import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import BodyLayout from "./components/BodyLayout";
import Employee from "./pages/Employee";
import Company from "./pages/Company";
import Home from "./pages/Home";
// import Employee from "./pages/Employee";

function App() {
  return (
    <>
      <Router>
        <Routes>
          {/* <Route path="/" element={<Employee />} /> */}
          <Route path="/" element={<BodyLayout />}>
            <Route index element={<Home />} />
            <Route path="/employees" element={<Employee />} />
            <Route path="/companies" element={<Company />} />
          </Route>
        </Routes>
      </Router>
      {/* <div>
        <h1>This is a app</h1>
      </div> */}
    </>
  );
}

export default App;
