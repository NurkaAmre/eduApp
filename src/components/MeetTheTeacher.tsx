import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { IoMdClipboard } from 'react-icons/io';
import { Link } from 'react-router-dom';
import teacher from '../../public/assets/teacher2.jpg';

const MeetTheTeacher: React.FC = () => {
  return (
    <section className="md:mt-14 px-28 mt-6 flex flex-col ">
      <div className="md:flex flex-col justify-center">
        <div className="flex justify-center gap-10 items-center">
          <div className="my-6">
            <p className="text-6xl text-[#243b66] font-bold">Meet Your</p>
            <div className="bg-[#c68df9] rounded-md w-fit">
              <p className="text-white font-bold text-6xl px-2 w-fit">
                TEACHER
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-[#e1a366] p-4 m-4 rounded-full py-4">
              <img
                src={teacher}
                alt="Jane Doe"
                width={200}
                height={200}
                className="rounded-full"
              />
            </div>
            <div className="bg-[#FFA077] text-3xl py-2 px-6 text-white">
              <p className="whitespace-nowrap font-rockSalt">Jane Doe</p>
            </div>
          </div>
        </div>
        <div className=" mb-10 flex flex-col justify-center">
          <p className="py-2">
            Mathematics is the language of patterns, shapes, and numbers that
            surrounds us every day. As a math teacher, my goal is to demystify
            this language and empower students to understand and appreciate the
            beauty of math. From basic arithmetic to complex problem-solving, I
            aim to instill critical thinking skills and confidence in my
            students, preparing them for success in their academic and
            professional endeavors.
          </p>
        </div>
      </div>
      <div className="md:flex justify-evenly gap-10 bg-[#7284FF] w-full py-6 px-10">
        <div className="flex gap-4 text-2xl text-white">
          <Link to="/meet-the-teacher">
            <FaGithub className="cursor-pointer" />
          </Link>
          <Link to="/meet-the-teacher">
            <FaLinkedin className="cursor-pointer" />
          </Link>
          <Link to="/meet-the-teacher">
            <IoMdClipboard className="cursor-pointer" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default MeetTheTeacher;
