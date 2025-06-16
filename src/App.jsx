import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";
import StartFramework from "./StartFramework/StartFramework";
import Layout from "./Layout/Layout";
import Portfolio from "./Portfolio/Portfolio";
import Contact from "./Contact/Contact";
import About from "./About/About";
import NotFound from "./NotFound/NotFound";
import OurRecipes from "./OurRecipes/OurRecipes";

let route = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <StartFramework /> },
      { path: "portfolio", element: <Portfolio /> },
      { path: "about", element: <About /> },
      { path: "contact", element: <Contact /> },
      { path: "ourRecipes", element: <OurRecipes/> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <RouterProvider router={route}> </RouterProvider>
    </>
  );
}

export default App;
