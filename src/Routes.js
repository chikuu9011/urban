import { createBrowserRouter } from "react-router-dom";
import Home from "./Pages/Home";
import Entry from "./Pages/Entry";
import Singlepage from "./Pages/Singlepage";
import Cart from "./Pages/Cart";
import LoginPage from "./Pages/Login";
import Pay from "./Pages/Pay";

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
      },
      {
        path: "/Login",
        element: <LoginPage />
      },
      {
        path:"/pay",
        element:<Pay/>
      }

    ],
  },
]);

export default Router
