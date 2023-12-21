import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";

import ListLocations from "./components/listLocation";
import { locationsFetch } from "store/action/Location";

const Location = () => {
  const dispatch = useDispatch();
  const locationHeader = [];
  const location = useSelector((state) => state.locations.locations);
  const results = location.results;

  useEffect(() => {
    dispatch(locationsFetch());
  }, []);

  console.log(results, "ini master");
  if (location != undefined && results) {
    for (const [key, value] of Object.entries(results[0])) {
      if (key != "id") {
        locationHeader.push({
          Header: key ? key.toUpperCase() : "",
          accessor: key ? key : "",
        });
      }
    }
  }

  console.log(locationHeader, "ini Header");

  return (
    <>
      {results && results.length > 0 && (
        <ListLocations columnsData={locationHeader} tableData={results} />
      )}
    </>
  );
};

export default Location;
