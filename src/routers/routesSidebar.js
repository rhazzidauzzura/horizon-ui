import React from "react";

// Auth Imports
import SignIn from "views/auth/SignIn";

// Icon Imports
import {
  MdHome,
  MdOutlineShoppingCart,
  MdBarChart,
  MdPerson,
  MdLock,
  MdAddChart,
} from "react-icons/md";

const routes = [
  {
    name: "Master Data",
    layout: "/list",
    path: "master-data",
    icon: <MdAddChart className="h-6 w-6" />,
    children: [
      {
        name: "Practitioner",
        layout: "/master-data/practitioner",
        path: "master-data/practitioner",
        pathParent: "master-data",
      },
      {
        name: "Location",
        layout: "/master-data/location",
        path: "master-data/location",
        pathParent: "master-data",
      },
    ],
  },
  {
    name: "Main Dashboard",
    layout: "/admin",
    path: "admin",
    icon: <MdHome className="h-6 w-6" />,
  },
  // {
  //   name: "NFT Marketplace",
  //   layout: "/admin",
  //   path: "nft-marketplace",
  //   icon: <MdOutlineShoppingCart className="h-6 w-6" />,
  //   component: <NFTMarketplace />,
  //   secondary: true,
  // },
  // {
  //   name: "Data Tables",
  //   layout: "/admin",
  //   icon: <MdBarChart className="h-6 w-6" />,
  //   path: "data-tables",
  //   component: <DataTables />,
  // },
  {
    name: "Profile",
    layout: "/profile",
    path: "profile",
    icon: <MdPerson className="h-6 w-6" />,
  },
  {
    name: "Sign In",
    layout: "/sign-in",
    path: "sign-in",
    icon: <MdLock className="h-6 w-6" />,
  },
  // {
  //   name: "RTL Admin",
  //   layout: "/rtl",
  //   path: "rtl",
  //   icon: <MdHome className="h-6 w-6" />,
  //   component: <RTLDefault />,
  // },
];
export default routes;
