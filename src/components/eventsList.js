// import React, { useState, useContext } from "react";
import "../stylesheets/eventsList.scss";

const EventsList = ({ day }) => {
	return (
		<div className="events-container">
			<h2> Today's Agenda </h2>
			<ul>
				<li className="event">
					<span className="event-time">10 AM:</span>
					<span className="event-name">Team Meeting</span>
				</li>

				<li className="event">
					<span className="event-time">3 PM:</span>
					<span className="event-name">AMA Meeting</span>
				</li>

				<li className="event">
					<span className="event-time">5 PM:</span>
					<span className="event-name">Happy Hour With team</span>
				</li>
			</ul>
		</div>
	);
};

export default EventsList;
