import { createBrowserRouter } from "react-router-dom";
import Home from "./Pages/Home";
import Entry from "./Pages/Entry";
import Singlepage from "./Pages/Singlepage";
import Cart from "./Pages/Cart";

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
        path: "/service/:id",
        element: <Singlepage />
      },
      {
        path: "/cart",
        element: <Cart />
      }

    ],
  },
]);

export default Router
