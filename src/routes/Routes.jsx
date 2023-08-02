import { createBrowserRouter } from "react-router-dom";
import Home from "../home/home/Home";
import LayOut from "../Layout/LayOut";
import Login from "../Login/Login";
import Register from "../Register/Register";
import EventTasks from "../event/EventTasks";
import PrivateRoute from "./PrivateRoute";
import Volunteers from "../volunteers/Volunteers";
import AddEvent from "../AddEvent/AddEvent";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LayOut></LayOut>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("http://localhost:5000/volunteers"),
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
      {
        path: "volunteers",
        element: (
          <PrivateRoute>
            <Volunteers></Volunteers>
          </PrivateRoute>
        ),
      },
      {
        path: "addEvent",
        element: <AddEvent></AddEvent>,
      },
    ],
  },
]);

export default router;
