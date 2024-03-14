const MainPage: React.FC = () => {
  // Get today's date
  const today = new Date();
  const options: Intl.DateTimeFormatOptions = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };
  const formattedDate = today.toLocaleDateString(undefined, options);

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-4">Welcome!</h1>
      <p className="mb-2">Hello, [Student Name]!</p>
      <p className="mb-4">Today is {formattedDate}.</p>
      {/* Additional content can be added here */}
    </div>
  );
};

export default MainPage;
