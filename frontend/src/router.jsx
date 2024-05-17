import { createBrowserRouter, RouterProvider } from "react-router-dom";
import User from "./pages/Dashboard";
import Admin from "./pages/Admin_Dashboard"

const router = createBrowserRouter([
  {
    path: "/user",
    element: <User/>,
  },
 
  {
    path: "/admin",
    element: <Admin />,
  },

  
]);

export function Router() {
  return <RouterProvider router={router} />;
}
