import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "@/pages/Login";

const RoutesConfig = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
      </Routes>
    </Router>
  );
};

export default RoutesConfig;