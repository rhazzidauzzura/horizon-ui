import CardMenu from "components/card/CardMenu";
import Card from "components/card";
import Search from "components/search";
import Swal from "sweetalert2";

import { DiApple } from "react-icons/di";
import { DiAndroid } from "react-icons/di";
import { DiWindows } from "react-icons/di";

import { IoAddCircleSharp } from "react-icons/io5";

import { FaPen } from "react-icons/fa";
import { FaTrash } from "react-icons/fa";

import { ArrowUpDownIcon } from "@chakra-ui/icons";
import { ArrowDownIcon } from "@chakra-ui/icons";
import { ArrowUpIcon } from "@chakra-ui/icons";

import React, { useMemo } from "react";
import { Link } from "react-router-dom";
import routes from "routers/MasterData/routeForm";
import { useDispatch } from "react-redux";
import { useState } from "react";

import {
  useFilters,
  useGlobalFilter,
  usePagination,
  useSortBy,
  useTable,
} from "react-table";
import Progress from "components/progress";
import { deleteMaster } from "store/action/ActionCreator";

const ListMasterData = (props) => {
  const { columnsData, tableData } = props;
  const [filterInput, setFilterInput] = useState("");
  const dispatch = useDispatch()
  
  const columns = useMemo(() => columnsData, []);
  const data = useMemo(() => tableData, []);
  console.log(data);

  const tableInstance = useTable(
    {
      columns,
      data,
    },
    useGlobalFilter,
    useFilters,
    useSortBy,
    usePagination
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    rows,
    prepareRow,
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    setFilter,
    state: { pageIndex, pageSize },
    initialState,
  } = tableInstance;


  const handleDeletemaster = (id) => {
    Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then((result) => {
        if (result.isConfirmed) {
          dispatch(deleteMaster(id))
        }
      });
  };
  return (
    <Card extra={"w-full h-full p-4"}>
      <div class="relative flex items-center justify-between">
        <div class="text-xl font-bold text-navy-700 dark:text-white">
          List Data
        </div>
        <div className="flex justify-between h-10">
            <Search 
            onDataChange = {(value) => {
              if(value){
                setFilterInput(value)
                setFilter("name", value)
              }
            }}
            />
            {/* <Link to={'/form/practitioner'}>
                <button
                className="flex items-center text-xl hover:cursor-pointer text-brand-500 hover:bg-gray-100 dark:bg-navy-700 dark:text-white dark:hover:bg-white/20 dark:active:bg-white/10 linear justify-center rounded-lg font-bold transition duration-200"
                >
                <IoAddCircleSharp className="h-10 w-10" />
                </button>
            </Link> */}
            {/* <CardMenu /> */}
        </div>
      </div>

      <div class="h-full overflow-x-scroll xl:overflow-x-hidden">
        <table
          {...getTableProps()}
          className="mt-8 h-max w-full"
          variant="simple"
          color="gray-500"
          mb="24px"
        >
          <thead>
            {headerGroups.map((headerGroup, index) => (
              <tr {...headerGroup.getHeaderGroupProps()} key={index}>
                {headerGroup.headers.map((column, index) => (
                  <th
                    {...column.getHeaderProps(column.getSortByToggleProps())}
                    className="border-b border-gray-200 pr-32 pb-[10px] text-start dark:!border-navy-700 "
                    key={index}
                  >
                    <div className="text-xs font-bold tracking-wide text-gray-600 flex justify-between">
                      {column.render("Header")}
                        <span>
                          {column.isSorted ? (column.isSortedDesc ?  <ArrowUpIcon/> : <ArrowDownIcon/>) : <ArrowUpDownIcon/>}
                        </span>
                    </div>
                  </th>
                ))}
                <th className="border-b border-gray-200 pr-32 pb-[10px] text-start dark:!border-navy-700 ">
                    <div className="text-xs font-bold tracking-wide text-gray-600 flex justify-between">
                        {""}
                    </div>   
                </th>
              </tr>

            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {page && page.map((row, index) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()} key={index}>
                  {row.cells.map((cell, index) => {
                    let data = "";
                    if (cell.column.Header === "NAME" || cell.column.Header === "NIK") {
                      data = (
                        <p className="text-sm font-bold text-navy-700 dark:text-white">
                          {cell.value}
                        </p>
                      );
                    } 
                    // else if (cell.column.Header === "TECH") {
                    //   data = (
                    //     <div className="flex items-center gap-2">
                    //       {cell.value.map((item, key) => {
                    //         if (item === "apple") {
                    //           return (
                    //             <div
                    //               key={key}
                    //               className="text-[22px] text-gray-600 dark:text-white"
                    //             >
                    //               <DiApple />
                    //             </div>
                    //           );
                    //         } else if (item === "android") {
                    //           return (
                    //             <div
                    //               key={key}
                    //               className="text-[21px] text-gray-600 dark:text-white"
                    //             >
                    //               <DiAndroid />
                    //             </div>
                    //           );
                    //         } else if (item === "windows") {
                    //           return (
                    //             <div
                    //               key={key}
                    //               className="text-xl text-gray-600 dark:text-white"
                    //             >
                    //               <DiWindows />
                    //             </div>
                    //           );
                    //         } else return null;
                    //       })}
                    //     </div>
                    //   );
                    // } 
                    else if (cell.column.Header === "GENDER") {
                      data = (
                        <p className="text-sm font-bold text-navy-700 dark:text-white">
                          {cell.value}
                        </p>
                      );
                    } else if (cell.column.Header === "NILAI") {
                      data = (
                        <div className="flex items-center gap-3">
                          <p className="text-sm font-bold text-navy-700 dark:text-white">
                            {cell.value}%
                          </p>
                          <Progress width="w-[68px]" value={cell.value} />
                        </div>
                      );
                    }
                    return (
                        <td
                            {...cell.getCellProps()}
                            key={index}
                            className="pt-[14px] pb-3 text-[14px]"
                        >
                            {data}
                        </td>
                    );
                  })}
                        <td>
                            <div className="w-[30%] flex justify-between hover:cursor-pointer" >
                                <Link key={routes.length} to={routes[0].layout + "/" + routes[0].path}>
                                    <FaPen/>
                                </Link>
                                <p onClick={() => handleDeletemaster(row.original.id)}>
                                    <FaTrash/>
                                </p>
                            </div>
                        </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <div className="sticky top-[100vh] mt-2 flex justify-center">
          <div className="relative w-[25%] flex items-center justify-between pagination">
            <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
              {"<<"}
            </button>{" "}
            {/* <button onClick={() => previousPage()} disabled={!canPreviousPage}>
              {"<"}
            </button>{" "} */}
            <span className="text-sm">
              Page{" "}
              <strong>
                {pageIndex + 1} of {pageOptions.length}
              </strong>{" "}
            </span>
            {/* <button onClick={() => nextPage()} disabled={!canNextPage}>
              {">"}
            </button>{" "} */}
            <button
              onClick={() => gotoPage(pageCount - 1)}
              disabled={!canNextPage}
            >
              {">>"}
            </button>{" "}
          </div>
        </div>
      </div>
    </Card>
  );
};

export default ListMasterData;
