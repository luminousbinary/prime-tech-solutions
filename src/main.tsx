import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home.tsx";
import Courses from "./pages/Courses/index";
import AboutUs from './pages/About-Us.tsx';
import CourseId from './pages/Courses/courseId.tsx';
import NoPage from './pages/NoPage.tsx';
import TechSolutions from './pages/Tech-Solutions.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/courses",
        element: <Courses />,
      }, {
        path: "/courses/:id", element: <CourseId />
      }, {
        path: "/about", element: <AboutUs />
      }, {
        path: "/tech-solutions", element: <TechSolutions />
      },
      {
        path: "*", element: <NoPage />
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);