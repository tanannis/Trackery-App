import React, { useContext, useState } from "react";
import Calendar from "react-calendar";
import "../stylesheets/calendar.scss";

const MyCalendar = () => {
	const [date, setDate] = useState(new Date());

	const handleSelectDate = (e) => {
		// e.preventDefault();
		console.log(e);
	};

	return (
		<div className="calendar-container">
			{/* calender */}
			<Calendar onChange={handleSelectDate} value={date} />
		</div>
	);
};

export default MyCalendar;
