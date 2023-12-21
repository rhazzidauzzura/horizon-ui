import { createBrowserRouter, redirect } from "react-router-dom";

import Layout from "layouts/layout";
// import Auth from "layouts/auth";
// import PractitionerView from "views/master-data";
// import Practitioner from "layouts/master-data/practitioner";
// import Admin from "layouts/admin/default";
// import Profile from "layouts/admin/profile";
// import FormPractitioner from "layouts/master-data/formPractitioner";
import FormPractitioner from "views/practitioner/formPractitioner";
import Practitioner from "views/practitioner";
import Dashboard from "views/admin/default";
import ProfileOverview from "views/admin/profile";
import SignIn from "views/auth/SignIn";
import Location from "views/location";
import FormLocation from "views/location/formLocations";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    loader: () => {
      const Token = localStorage.getItem("Token");
      console.log("TOKEN", Token);
      if (!Token) {
        return redirect("/sign-in");
      }
      return null;
    },
    children: [
      {
        path: "admin",
        element: <Dashboard />,
      },
      {
        path: "master-data/practitioner",
        element: <Practitioner />,
      },
      {
        path: "master-data/location",
        element: <Location />,
      },
      {
        path: "form/practitioner",
        element: <FormPractitioner />,
      },
      {
        path: "form/location",
        element: <FormLocation />,
      },
      {
        path: "profile",
        element: <ProfileOverview />,
      },
    ],
  },
  {
    path: "sign-in",
    element: <SignIn />,
  },
]);

export default router;
