import ToDoList from "../components/todolist";
import "../stylesheets/home.scss";

const Home = () => {
	return (
		<div className="home">
			<h2 className="greeting">Welcome to your dashboard</h2>
			<span className="reminder">Below are your tasks for today:</span>
			<ToDoList />
		</div>
	);
};

export default Home;
