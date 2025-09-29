import { createBrowserRouter } from "react-router-dom";
import Home from "./Pages/Home";
import Entry from "./Pages/Entry";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "/",
        element: <Entry />,
      },
    ],
  },
]);

export default Router
