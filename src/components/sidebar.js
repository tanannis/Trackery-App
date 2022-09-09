import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faHouse,
	faDatabase,
	faCalendar,
	faGear,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import "../stylesheets/sidebar.scss";

const SideBar = () => {
	return (
		<div className="sidebar">
			<div className="links-container">
				<Link className="sidebar-link" to="/">
					<FontAwesomeIcon icon={faHouse} className="icon" />
				</Link>
				<Link className="sidebar-link" to="/mydata">
					<FontAwesomeIcon icon={faDatabase} className="icon" />
				</Link>
				<Link className="sidebar-link" to="/calendar">
					<FontAwesomeIcon icon={faCalendar} className="icon" />
				</Link>
				<Link className="sidebar-link" to="/settings">
					<FontAwesomeIcon icon={faGear} className="icon" />
				</Link>
			</div>
		</div>
	);
};

export default SideBar;
