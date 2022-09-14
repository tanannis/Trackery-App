import React, { useState } from "react";
import Calendar from "react-calendar";
import EventsList from "../components/eventsList";
import "../stylesheets/calendar.scss";

const MyCalendar = () => {
	const [date, setDate] = useState(new Date());

	const handleSelectDate = (date) => {
		console.log(date);
		setDate(date);
	};

	return (
		<div className="calendar-container">
			<Calendar onChange={handleSelectDate} value={date} selectRange={true} />
			<EventsList></EventsList>
		</div>
	);
};

export default MyCalendar;
