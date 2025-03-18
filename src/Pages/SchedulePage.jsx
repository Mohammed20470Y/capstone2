import React, { useState } from "react";
import { useParams } from "react-router-dom";
import "./SchedulePage.css"; // Import CSS for styling

// Mock Data: Add more doctors/services if needed
const schedules = {
  1: {
    title: "Rhinoplasty Surgery",
    team: "Team",
    availableDates: ["Tue 9", "Wed 10", "Thu 11", "Fri 12", "Sat 13", "Mon 15"],
    timeSlots: {
      "Tue 9": ["11:00 AM", "04:00 PM", "09:00 PM"],
      "Wed 10": ["10:00 AM", "02:00 PM", "06:00 PM"],
      "Thu 11": ["09:00 AM", "01:00 PM", "05:00 PM"],
    },
  },
  2: {
    title: "Another Surgery",
    team: "Team B",
    availableDates: ["Mon 15", "Tue 16", "Wed 17"],
    timeSlots: {
      "Mon 15": ["08:00 AM", "12:00 PM", "03:00 PM"],
      "Tue 16": ["09:00 AM", "01:00 PM", "05:00 PM"],
    },
  },
};

const SchedulePage = () => {
  const { id } = useParams();
  const schedule = schedules[id];

  const [selectedDate, setSelectedDate] = useState(schedule?.availableDates[0]);
  const [selectedTime, setSelectedTime] = useState(null);

  if (!schedule) return <h2>Schedule not found</h2>;

  return (
    <div className="schedule-container">
      {/* Header */}
      <div className="header">
        <span className="title">{schedule.title}</span>
        <span className="team">{schedule.team}</span>
      </div>

      {/* Date Selection */}
      <div className="date-container">
        {schedule.availableDates.map((date) => (
          <div
            key={date}
            className={`date ${selectedDate === date ? "selected" : ""}`}
            onClick={() => {
              setSelectedDate(date);
              setSelectedTime(null); // Reset time selection when date changes
            }}
          >
            {date}
          </div>
        ))}
      </div>

      {/* Time Slots */}
      <div className="time-container">
        <span className="section-title">Available times</span>
        <div className="time-list">
          {schedule.timeSlots[selectedDate]?.map((time) => (
            <div
              key={time}
              className={`time ${selectedTime === time ? "selected" : ""}`}
              onClick={() => setSelectedTime(time)}
            >
              {time}
            </div>
          ))}
        </div>
      </div>

      {/* Appointment Button */}
      <button className="appointment-btn" disabled={!selectedTime}>
        SET APPOINTMENT
      </button>
    </div>
  );
};

export default SchedulePage;
