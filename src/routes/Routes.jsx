import { createBrowserRouter } from "react-router-dom";
import Home from "../home/home/Home";
import LayOut from "../Layout/LayOut";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LayOut></LayOut>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
    ],
  },
]);

export default router;
