// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

import './App.css'
// Import styles of packages that you've installed.
// All packages except `@mantine/hooks` require styles imports
import '@mantine/core/styles.css';

import { MantineProvider } from '@mantine/core';


import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Courses from "./pages/Courses/index";
import AboutUs from "./pages/About-Us";
import TechSolutions from './pages/Tech-Solutions'
import CourseId from './pages/Courses/[courseId]';
// import NoPage from "./pages/NoPage";


export default function App() {
  // const [count, setCount] = useState(0)
  return (<MantineProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/courses/:courseId" element={<CourseId />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/tech-solutions" element={<TechSolutions />} />
          {/* <Route path="*" element={<NoPage />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  </MantineProvider>
  );
}

// const root = ReactDOM.createRoot(document.getElementById('root'));
const rootElement = document.getElementById('root');
if (rootElement) {
    const root = ReactDOM.createRoot(rootElement);
    // your code to render the application
    root.render(<App />)

  } else {
    console.error("Root element not found");
}