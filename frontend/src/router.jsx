import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import Signup from "./pages/Signup";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
  },
  {
    path: "/home",
    element: <Home />,
  },
{
  path:"/signup",
  element: <Signup />,
  }
]);

export function Router() {
  return <RouterProvider router={router} />;
}
