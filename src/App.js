import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TopBar from "./components/topbar";
import SideBar from "./components/sidebar";
import Home from "./pages/home";
import MyData from "./pages/mydata";
import Calendar from "./pages/calendar";
import Settings from "./pages/settings";
import "./app.scss";

const App = () => {
	return (
		<Router>
			<TopBar />
			<div className="container">
				<SideBar />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/mydata" element={<MyData />} />
					<Route path="/calendar" element={<Calendar />} />
					<Route path="/settings" element={<Settings />} />
				</Routes>
			</div>
		</Router>
	);
};

export default App;
