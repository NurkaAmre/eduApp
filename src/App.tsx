import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainPage from './components/MainPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainPage />,
    children: [],
  },
]);
const App: React.FC = () => {
  return (
    <>
      <div className="flex">
        {/* <Sidebar /> */}
        <RouterProvider router={router} />
      </div>
    </>
  );
};

export default App;
