import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import AddTool from "./pages/AddTool";

const App = () => {
  return (
    <Router>
      <div style={{ padding: "20px" }}>
        <nav style={{ marginBottom: "20px", display: "flex", gap: "20px" }}>
          <Link to="/">Dashboard</Link>
          <Link to="/add-tool">Add Tool</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/add-tool" element={<AddTool />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
