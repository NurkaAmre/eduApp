import { Link } from 'react-router-dom';
import logo from '../../public/assets/logo.png';

const Header = () => {
  const today = new Date();
  const options: Intl.DateTimeFormatOptions = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };
  const formattedDate = today.toLocaleDateString(undefined, options);
  return (
    <div className="flex p-4 justify-between">
      <Link to="/" className="mr-4">
        <img src={logo} alt="Logo" className="h-20 w-20" />
      </Link>
      <p className="mb-4">Today is {formattedDate}.</p>
    </div>
  );
};

export default Header;
