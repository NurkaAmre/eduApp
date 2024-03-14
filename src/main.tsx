import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import TodaysAgendaPage from './components/TodaysAgenda.tsx';
import ClassCalendar from './components/ClassCalendar.tsx';
import ClassNews from './components/ClassNews.tsx';
import MeetTheTeacher from './components/MeetTheTeacher.tsx';

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
  {
    path: '/class-news',
    element: <ClassNews />,
    children: [],
  },
  {
    path: '/meet-the-teacher',
    element: <MeetTheTeacher />,
    children: [],
  },
]);
ReactDOM.createRoot(document.getElementById('root')!).render(
  <>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </>
);
