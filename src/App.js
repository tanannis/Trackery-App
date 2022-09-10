import React, { useContext, useReducer } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TodoContext from "./context/todoContext";
import { usePersistedContext } from "./hooks/usePersist";
import todoReducer from "./reducers/todoReducer";
import TopBar from "./components/topbar";
import SideBar from "./components/sidebar";
import Home from "./pages/home";
import MyData from "./pages/mydata";
import Calendar from "./pages/calendar";
import Settings from "./pages/settings";
import "./app.scss";

const App = () => {
	// create a global store to store the state
	const globalStore = usePersistedContext(useContext(TodoContext), "state");

	const [state, dispatch] = usePersistedContext(
		useReducer(todoReducer, globalStore),
		"state"
	);

	return (
		<TodoContext.Provider value={{ state, dispatch }}>
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
		</TodoContext.Provider>
	);
};

export default App;
