import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "../components/calendar.css";

const CalendarApp = () => {
  const [date, setDate] = useState(new Date());

  const onChange = (newDate) => {
    setDate(newDate);
  };

  return (
    <div className="calendar-content">
      <h1>Calendar</h1>
      <div className="calendar-container">
        <Calendar onChange={onChange} value={date} />
      </div>
    </div>
  );
};

export default CalendarApp;
