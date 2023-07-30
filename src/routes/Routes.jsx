import { createBrowserRouter } from "react-router-dom";
import Home from "../home/home/Home";
import LayOut from "../Layout/LayOut";
import Login from "../Login/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LayOut></LayOut>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
    ],
  },
]);

export default router;