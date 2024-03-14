import React, { useState, useEffect } from 'react';

interface Teacher {
  id: number;
  name: string;
  photoUrl: string;
  bio: string;
  email: string;
  phone: string;
}

const MeetTheTeachers: React.FC = () => {
  const [teachers, setTeachers] = useState<Teacher[]>([]);

  useEffect(() => {
    const fetchTeachers = async () => {
      try {
        const response = await fetch('/teachers.json');
        const data = await response.json();
        setTeachers(data);
      } catch (error) {
        console.error('Error fetching teachers:', error);
      }
    };

    fetchTeachers();
  }, []);

  return (
    <div className="container mx-auto p-10">
      <h1 className="text-3xl font-bold mb-6 text-center">Meet the Teachers</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {teachers.map((teacher) => (
          <div key={teacher.id} className="bg-white shadow-md rounded-lg p-6">
            <div className="flex justify-center mb-6">
              <img
                src={teacher.photoUrl}
                alt={teacher.name}
                className="w-64 h-64 rounded-full"
              />
            </div>
            <div className="mb-6">
              <h2 className="text-xl font-bold mb-2">Teacher Information</h2>
              <p className="text-gray-600">{teacher.bio}</p>
            </div>
            <div>
              <h2 className="text-xl font-bold mb-2">Contact Details</h2>
              <div className="flex flex-col">
                <div className="mb-2">
                  <strong>Email:</strong> {teacher.email}
                </div>
                <div>
                  <strong>Phone:</strong> {teacher.phone}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MeetTheTeachers;
