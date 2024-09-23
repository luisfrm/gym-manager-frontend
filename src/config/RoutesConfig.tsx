import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "@/pages/Login";
import Dashboard from "@pages/Dashboard";
import ProtectedRouted from "@pages/ProtectedRouted";
import Register from "@pages/Register";
import Home from "@pages/Home";
import Settings from "@pages/Settings";

const RoutesConfig = () => {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/login" element={<Login />} />
				<Route path="/register" element={<Register />} />
				<Route
					path="/dashboard"
					element={
						<ProtectedRouted>
							<Dashboard />
						</ProtectedRouted>
					}
				/>
				<Route
					path="/settings"
					element={
						<ProtectedRouted>
							<Settings />
						</ProtectedRouted>
					}
				/>
				<Route
					path="*"
					element={
						<div>
							<h1 className="text-3xl font-extrabold">404. Page not found</h1>
						</div>
					}
				/>
			</Routes>
		</Router>
	);
};

export default RoutesConfig;
