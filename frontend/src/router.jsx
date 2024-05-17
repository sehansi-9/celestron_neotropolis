import { createBrowserRouter, RouterProvider } from "react-router-dom";
import User from "./pages/Dashboard";
import Admin from "./pages/Admin_Dashboard"
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Signin from "./pages/Signin";
import SignupSuccessful from "./pages/Signupsuccessful";
import AddUser from "./pages/AddUser";
import AddAdmin from "./pages/AddAdmin";
import UpdateUser from "./pages/UpdateUser";
import UpdateAdmin from "./pages/UpadateAdmin";
import DashboardSuccessful from "./pages/DashboardSuceesful"
import DashboardRemoved from "./pages/DashboardRemove"


const router = createBrowserRouter([
  {
    path: "/user",
    element: <User/>,
  },
 
  {
    path: "/admin",
    element: <Admin />,
  },
  
{
  path:"/signup",
  element: <Signup />,
  },
  {
    path: "/signupsuccessful",
    element: <SignupSuccessful />,
  },
  {
    path:"/signin",
    element: <Signin />,
    },
    {
      path: "/adduser",
      element: <AddUser />,
    }, 
    {
      path: "/addadmin",
      element: <AddAdmin />,
    }, 
    {
      path: "/updateuser",
      element: <UpdateUser/>,
    },
    {
      path: "/updateadmin",
      element: <UpdateAdmin/>,
    },
    {
      path: "/updateuser",
      element: <UpdateUser/>,
    },
    {
      path: "/dashboardsuccessful",
      element: <DashboardSuccessful/>,
    },
    {
      path: "/dashboardremoved",
      element: <DashboardRemoved/>,
    },



]);

export function Router() {
  return <RouterProvider router={router} />;
}

