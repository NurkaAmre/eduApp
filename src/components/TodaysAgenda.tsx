import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface AgendaItem {
  id: number;
  title: string;
  description: string;
  time: string;
}

const TodaysAgendaPage: React.FC = () => {
  const [agendaItems, setAgendaItems] = useState<AgendaItem[]>([]);

  useEffect(() => {
    const fetchAgendaItems = async () => {
      try {
        const response = await axios.get<AgendaItem[]>('/agenda.json');
        setAgendaItems(response.data);
      } catch (error) {
        console.error('Error fetching agenda items:', error);
      }
    };

    fetchAgendaItems();
  }, []);

  return (
    <section className="md:mt-[5rem] md:mx-[10rem] px-6 py-4">
      <h1 className="md:text-4xl text:3xl font-bold m-6">Today's Agenda</h1>
      <div className="grid md:grid-cols-2 md:gap-4 gap-2">
        {agendaItems.map((agendaItem) => (
          <div
            key={agendaItem.id}
            className="border border-gray-200 bg-[#FF8652] shadow-lg p-4 rounded-lg"
          >
            <div className="flex justify-between">
              <h2 className="md:text-xl font-semibold mb-2">
                {agendaItem.title}
              </h2>
              <p className=" text-gray-950">{agendaItem.time}</p>
            </div>
            <p className="">{agendaItem.description}</p>
          </div>
        ))}
      </div>
      <div className="my-10 py-6 text-center text-lg bg-[#8191FF] rounded-3xl text-white">
        <h2 className="font-bold text-2xl">Reminders</h2>
        <p>
          Help the students remember things that they need to accomplish within
          the day.
        </p>
      </div>
    </section>
  );
};

export default TodaysAgendaPage;
