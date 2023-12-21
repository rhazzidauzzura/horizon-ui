/* eslint-disable */
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import DashIcon from "components/icons/DashIcon";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";

export function SidebarLinks(props) {
  const [open, setOpen] = useState(false);
  const [flag, setFlag] = useState(false);

  // Chakra color mode
  let location = useLocation();

  const { routes } = props;

  // verifies if routeName is the one active (in browser input)
  const activeRoute = (routeName) => {
    return location.pathname.includes(routeName);
    // return false
  };

  const openDropdown = () => {
    // console.log(path);
    open ? setOpen(false) : setOpen(true);
  };

  const createLinks = (routes) => {
    return routes.map((route, index) => {
      return (
        <div>
          {route.path != "master-data" ? (
            <Link key={index} to={route.layout}>
              <div
                onClick={() => setOpen(false)}
                className="relative mb-3 flex hover:cursor-pointer"
              >
                <li
                  className="my-[3px] flex cursor-pointer items-center px-8"
                  key={index}
                >
                  <span
                    className={`${
                      activeRoute(route.layout) === true
                        ? "font-bold text-brand-500 dark:text-white"
                        : "font-medium text-gray-600"
                    }`}
                  >
                    {route.icon ? route.icon : <DashIcon />}{" "}
                  </span>
                  <p
                    className={`leading-1 ml-4 flex ${
                      activeRoute(route.layout) === true
                        ? "font-bold text-navy-700 dark:text-white"
                        : "font-medium text-gray-600"
                    }`}
                  >
                    {route.name}
                  </p>
                </li>

                {activeRoute(route.path) ? (
                  <div class="absolute right-0 top-px h-9 w-1 rounded-lg bg-brand-500 dark:bg-brand-400" />
                ) : null}
              </div>
            </Link>
          ) : (
            <div className="relative mb-3 flex hover:cursor-pointer">
              <li
                className="my-[3px] cursor-pointer items-center px-8"
                key={index}
              >
                <div onClick={openDropdown} className="flex justify-between">
                  <span
                    className={`${
                      activeRoute(route.path) === true
                        ? "font-bold text-brand-500 dark:text-white"
                        : "font-medium text-gray-600"
                    }`}
                  >
                    {route.icon ? route.icon : <DashIcon />}{" "}
                  </span>
                  <p
                    className={`leading-1 ml-4 flex ${
                      activeRoute(route.path) === true
                        ? "font-bold text-navy-700 dark:text-white"
                        : "font-medium text-gray-600"
                    }`}
                  >
                    {route.name}
                  </p>
                  <div className="ml-[5.5rem] mt-1">
                    {!open ? <IoIosArrowDown /> : <IoIosArrowUp />}
                  </div>
                </div>
                {open && (
                  <ul className="mt-4">
                    {route.children.map((child, idx) => {
                      return (
                        // <>
                        <Link to={child.layout}>
                          {/* <li className={`flex-row items-center h-8 ml-12 rounded-l ${
                                    activeRoute(child.path) === true
                                      ? "font-bold text-navy-700 dark:text-white"
                                      : "font-medium text-gray-600"
                                  }`} >
                              {child.name}
                        </li>  */}
                          <li
                            className={`ml-12 h-8 flex-row items-center rounded-l ${
                              activeRoute(child.path) === true
                                ? "font-bold text-navy-700 dark:text-white"
                                : "font-medium text-gray-600"
                            }`}
                          >
                            {child.name}
                          </li>
                        </Link>
                        // </>
                      );
                    })}
                  </ul>
                )}
              </li>
              {activeRoute(route.path) ? (
                <div class="absolute right-0 top-px h-9 w-1 rounded-lg bg-brand-500 dark:bg-brand-400" />
              ) : null}
            </div>
          )}
        </div>
      );
    });
  };
  // BRAND
  return createLinks(routes);
}

export default SidebarLinks;
