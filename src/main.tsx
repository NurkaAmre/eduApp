import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import TodaysAgendaPage from './components/TodaysAgenda.tsx';
import ClassCalendar from './components/ClassCalendar.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [],
  },
  {},
  {
    path: '/todays-agenda',
    element: <TodaysAgendaPage />,
    children: [],
  },
  {
    path: '/class-calendar',
    element: <ClassCalendar />,
    children: [],
  },
  // {
  //   path: '/class-news',
  //   element: <div>Class News</div>,
  //   children: [],
  // },
  // {
  //   path: '/meet-the-teacher',
  //   element: <div>Meet the Teacher</div>,
  //   children: [],
  // },
  // {
  //   path: '/student-of-the-week',
  //   element: <div>Student of the Week</div>,
  //   children: [],
  // },
  // {
  //   path: '/classroom-policies',
  //   element: <div>Classroom Policies</div>,
  //   children: [],
  // },
  // {
  //   path: '/class-resources',
  //   element: <div>Class Resources</div>,
  //   children: [],
  // },
]);
ReactDOM.createRoot(document.getElementById('root')!).render(
  <>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </>
);
