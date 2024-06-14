import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.scss";

import Home from "./Pages/Home/Home";
import Contacts from "./Pages/Contact/Contacts";
import AllProjects from "./Pages/AllProjects/AllProjects";
import AboutPage from "./Pages/About/AboutPage";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/contacts",
      element: <Contacts path={"contacts"} />,
    },
    {
      path: "/projects",
      element: <AllProjects path={"projects"} />,
    },
    {
      path: "/about",
      element: <AboutPage path={"about"} />,
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
