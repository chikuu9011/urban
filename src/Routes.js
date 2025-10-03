import { createBrowserRouter } from "react-router-dom";
import Home from "./Pages/Home";
import Entry from "./Pages/Entry";
import Singlepage from "./Pages/Singlepage";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "/",
        element: <Entry />,
      },
      {
        path:"/service/:id",
        element:<Singlepage/>
      }
    ],
  },
]);

export default Router
