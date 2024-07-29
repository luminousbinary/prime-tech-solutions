// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

import './App.css'
// Import styles of packages that you've installed.
// All packages except `@mantine/hooks` require styles imports
import '@mantine/core/styles.css';

import { MantineProvider } from '@mantine/core';


// import ReactDOM from "react-dom/client";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";

export default function App() {
  // const [count, setCount] = useState(0)
  return (
  <MantineProvider>
     <Layout/>
  </MantineProvider>
  );
}

