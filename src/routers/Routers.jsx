import { Routes, Route } from "react-router-dom";
import Home from "../pages/home/Home";
import Dashboard from "../pages/dashboard/Dashboard";
import Inbox from "../pages/inbox/Inbox";
import Error from "../pages/error/Error";
import Transport from "../pages/transport/Transport";
import Schedule from "../pages/schedule/Schedule";

const Routers = () => {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/dashboard" element={<Dashboard />} />
			<Route path="/transport" element={<Transport />} />
			<Route path="/schedule" element={<Schedule />} />
			<Route path="/bus-fare" element={<BusFare />} />
			<Route path="/inbox" element={<Inbox />} />
			<Route path="/profile" element={<ProfileControler />} />
			<Route path="*" element={<Error />} />
		</Routes>
	);
};

export default Routers;
