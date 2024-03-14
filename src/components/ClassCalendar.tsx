import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface CalendarDay {
  day: string;
  events: CalendarEvent[];
}

interface CalendarEvent {
  time: string;
  subject: string;
}

const ClassCalendar: React.FC = () => {
  const [calendarData, setCalendarData] = useState<CalendarDay[]>([]);

  useEffect(() => {
    const fetchCalendarData = async () => {
      try {
        const response = await axios.get<CalendarDay[]>('/calendar.json');
        setCalendarData(response.data);
      } catch (error) {
        console.error('Error fetching calendar data:', error);
      }
    };
    fetchCalendarData();
  }, []);

  const allTimes = calendarData.flatMap((day) =>
    day.events.map((event) => event.time)
  );
  const uniqueTimes = [...new Set(allTimes)];

  return (
    <div className="md:p-10 p-2 flex flex-col justify-center">
      <h1 className="text-3xl font-bold m-6">Class Calendar</h1>
      <table className="table-auto border-collapse border border-white">
        <thead>
          <tr>
            <th className="px-3 py-2 "></th>
            {calendarData.map((day) => (
              <th
                key={day.day}
                className="px-4 py-2 text-center border border-white bg-[#FF8652]"
              >
                {day.day}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {uniqueTimes.map((time, index) => (
            <tr key={index}>
              <td className="px-4 py-2 text-right border bg-[#8191FF] border-white">
                {time}
              </td>
              {calendarData.map((day) => {
                const event = day.events.find((event) => event.time === time);
                return (
                  <td
                    key={`${day.day}-${time}`}
                    className="px-4 py-2 border border-white bg-[#FFCE4F]"
                  >
                    {event ? event.subject : ''}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ClassCalendar;
