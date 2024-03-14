import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [],
  },
  {},
  {
    path: '/todays-agenda',
    element: <div>Today's Agenda</div>,
    children: [],
  },
  // {
  //   path: '/class-calendar',
  //   element: <div>Class Calendar</div>,
  //   children: [],
  // },
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
