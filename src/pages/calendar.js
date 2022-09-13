import React, { useContext, useState } from "react";
import Calendar from "react-calendar";
import "../stylesheets/calendar.scss";

const MyCalendar = () => {
	const [date, setDate] = useState(new Date());

	const handleSelectDate = (date) => {
		console.log(date);
		setDate(date);
	};

	return (
		<div className="calendar-container">
			{/* calender */}
			<Calendar onChange={handleSelectDate} value={date} />
		</div>
	);
};

export default MyCalendar;
