import { createBrowserRouter } from "react-router-dom";
import Home from "../home/home/Home";
import LayOut from "../Layout/LayOut";
import Login from "../Login/Login";
import Register from "../Register/Register";
import EventTasks from "../event/EventTasks";
import PrivateRoute from "./PrivateRoute";

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
      {
        path: "register",
        element: <Register></Register>,
      },
      {
        path: "events",
        element: (
          <PrivateRoute>
            <EventTasks></EventTasks>
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default router;
