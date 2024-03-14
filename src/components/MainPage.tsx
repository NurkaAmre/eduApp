import { Link } from 'react-router-dom';
import {
  MdToday,
  MdEvent,
  MdList,
  MdSchool,
  MdAssignment,
  MdDescription,
  MdCollectionsBookmark,
} from 'react-icons/md';

const MainPage: React.FC = () => {
  return (
    <main className="flex md:flex-row flex-col justify-around">
      <div className="md:px-20 px-6 flex-1 md:pt-20 min-w-[300px]">
        <div
          className="bg-orange-400 rounded-full px-6 py-3 mb-10"
          style={{ transform: 'rotate(-5deg)' }}
        >
          <h1 className="md:text-4xl text:3xl font-bold">
            Welcome to the Creative Education
          </h1>
        </div>
        <div className="mt-5 px-4 py-2 my-6">
          <h2 className="mb-2 text-xl m-5">Hello Name!</h2>
          <p className=" md:mx-20">
            We are excited to have you in our class. We will have a great time
            learning and growing together. Our goal is to provide a nurturing
            environment where each student can thrive and reach their full
            potential.
            <br /> With dedicated teachers and engaging curriculum, we aim to
            make every lesson meaningful and enjoyable. Together, let's embark
            on this journey of discovery and exploration. Welcome aboard!
          </p>
        </div>
      </div>
      <div className="md:p-20 grid grid-cols-2 md:gap-10 md:text-lg text-base">
        <Link
          to="/todays-agenda"
          className="flex items-center mb-2 text-white bg-[#FF8652] px-4 py-3"
        >
          <MdToday className="mr-2" /> Today's Agenda
        </Link>
        <Link
          to="/class-calendar"
          className="flex items-center mb-2 text-white bg-[#8191FF] px-4 py-3"
        >
          <MdEvent className="mr-2" /> Class Calendar
        </Link>
        <Link
          to="/class-news"
          className="flex items-center mb-2 text-white bg-[#FFCE4F] px-4 py-3"
        >
          <MdList className="mr-2" /> Class News
        </Link>
        <Link
          to="/meet-the-teacher"
          className="flex items-center mb-2 text-white bg-[#FFA077] px-4 py-3"
        >
          <MdSchool className="mr-2" /> Meet the Teacher
        </Link>
        <Link
          to="/student-of-the-week"
          className="flex items-center mb-2 text-white bg-[#7284FF] px-2 py-2"
        >
          <MdAssignment className="mr-2" /> Student of the Week
        </Link>
        <Link
          to="/classroom-policies"
          className="flex items-center mb-2 text-white bg-[#8fffa5] px-4 py-3"
        >
          <MdDescription className="mr-2" /> Classroom Policies
        </Link>
        <Link
          to="/class-resources"
          className="flex items-center mb-2 text-white bg-[#8ef073] px-4 py-3"
        >
          <MdCollectionsBookmark className="mr-2" /> Class Resources
        </Link>
        <Link
          to="/parent-resources"
          className="flex items-center mb-2 text-white bg-yellow-300 px-4 py-3"
        >
          <MdCollectionsBookmark className="mr-2" /> Parent Resources
        </Link>
      </div>
    </main>
  );
};

export default MainPage;
