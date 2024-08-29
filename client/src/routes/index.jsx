import MainLayout from "../layouts/MainLayout";
import Test from "../pages/Test";
import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    children: [
      {
        path: "/",
        element: <MainLayout />,
        children: [
          {
            path: "test",
            element: <Test />,
          },
          {
            path: "/",
            element: <Home />,
          },
        ],
      },
    ],
  },
]);

export default router;
