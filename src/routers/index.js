import { createBrowserRouter, redirect } from "react-router-dom";

import Layout from "layouts/layout";
import Auth from "layouts/auth";
// import PractitionerView from "views/master-data";
import Practitioner from "layouts/master-data/practitioner";
import Admin from "layouts/admin/default";
import Profile from "layouts/admin/profile";
import FormPractitioner from "layouts/master-data/formPractitioner";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    // loader: () => {
    //   const access_token = localStorage.getItem("access_token");
    //   if (!access_token) {
    //     return redirect("/login");
    //   }
    //   return null;
    // },
    children: [
      {
        path: "/admin",
        element:<Admin/>,
      },
      {
        path: "/master-data/practitioner",
        element: <Practitioner />,
      },
      {
        path: "/form/practitioner",
        element: <FormPractitioner/>,
      },
      {
        path: "/profile",
        element:<Profile/>,
      },
    ],
  },
  {
    path: "/sign-in",
    element: <Auth />,
  },
]);

export default router;
