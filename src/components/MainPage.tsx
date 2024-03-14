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
    <main className="flex">
      <div className="px-20">
        <div className="bg-orange-400 rounded-full px-4 py-2 mb-6">
          <h1 className="md:text-3xl font-bold">
            Welcome to the Creative Education!
          </h1>
        </div>
        <div className="bg-[#8191FF] rounded-full px-4 py-2">
          <h2 className="mb-2 text-xl">Hello, Amre!</h2>
        </div>

        {/* Additional content can be added here */}
      </div>
      <div className="p-10 grid">
        <Link
          to="/todays-agenda"
          className="flex items-center mb-2 text-white bg-blue-500 px-4 py-2 rounded-full"
        >
          <MdToday className="mr-2" /> Today's Agenda
        </Link>
        <Link
          to="/class-calendar"
          className="flex items-center mb-2 text-gray-600"
        >
          <MdEvent className="mr-2" /> Class Calendar
        </Link>
        <Link to="/class-news" className="flex items-center mb-2 text-gray-600">
          <MdList className="mr-2" /> Class News
        </Link>
        <Link
          to="/meet-the-teacher"
          className="flex items-center mb-2 text-gray-600"
        >
          <MdSchool className="mr-2" /> Meet the Teacher
        </Link>
        <Link
          to="/student-of-the-week"
          className="flex items-center mb-2 text-gray-600"
        >
          <MdAssignment className="mr-2" /> Student of the Week
        </Link>
        <Link
          to="/classroom-policies"
          className="flex items-center mb-2 text-gray-600"
        >
          <MdDescription className="mr-2" /> Classroom Policies
        </Link>
        <Link
          to="/class-resources"
          className="flex items-center mb-2 text-gray-600"
        >
          <MdCollectionsBookmark className="mr-2" /> Class Resources
        </Link>
        <Link
          to="/parent-resources"
          className="flex items-center text-gray-600"
        >
          <MdCollectionsBookmark className="mr-2" /> Parent Resources
        </Link>
      </div>
    </main>
  );
};

export default MainPage;
