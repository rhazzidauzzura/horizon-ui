import React from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import Navbar from "components/navbar";
import Sidebar from "components/sidebar";
import Footer from "components/footer/Footer";
import routes from "routers/routesSidebar";
import Dashboard from "views/admin/default";
import { Circles } from "react-loader-spinner";
import { useState } from "react";

export default function Admin(props) {
  const { ...rest } = props;
  const location = useLocation();
  const [open, setOpen] = React.useState(true);
  const [loading, setLoading] = React.useState(true);
  const [currentRoute, setCurrentRoute] = React.useState("Main Dashboard");

  setTimeout(setLoading(false), 2000);
  return (
    // <div className="flex h-full w-full">
    //   <Sidebar open={open} onClose={() => setOpen(false)} />
    //   {/* Navbar & Main Content */}
    //   <div className="h-full w-full bg-lightPrimary dark:!bg-navy-900">
    //     {/* Main Content */}
    //     <main
    //       className={`mx-[12px] h-full flex-none transition-all md:pr-2 xl:ml-[313px]`}
    //     >
    //       {/* Routes */}
    //       <div className="h-full">
    //         <Navbar
    //           onOpenSidenav={() => setOpen(true)}
    //           logoText={"Horizon UI Tailwind React"}
    //           brandText={currentRoute}
    //           secondary={getActiveNavbar(routes)}
    //           {...rest}
    //         />
    //         <div className="pt-5s mx-auto mb-auto h-full min-h-[84vh] p-2 md:pr-2">
    //           <Dashboard/>
    //         </div>
    //         <div className="p-3">
    //           <Footer />
    //         </div>
    //       </div>
    //     </main>
    //   </div>
    // </div>
    <>
      {loading ? (
        <Circles
          height="80"
          width="80"
          color="#4fa94d"
          ariaLabel="circles-loading"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
        />
      ) : (
        <Dashboard />
      )}
    </>
  );
}
