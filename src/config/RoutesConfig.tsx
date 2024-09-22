import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "@/pages/Login";
import Dashboard from "@pages/Dashboard";
import ProtectedRouted from "@pages/ProtectedRouted";
import Register from "@pages/Register";
import Home from "@pages/Home";

const RoutesConfig = () => {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={
            <ProtectedRouted>
              <Dashboard />
            </ProtectedRouted>
          } 
        />
      </Routes>
    </Router>
  );
};

export default RoutesConfig;