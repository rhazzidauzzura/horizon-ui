import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";

import ListPractitioners from "./components/practitioner";
import { practitionersFetch } from "store/action/ActionCreator";

const Practitioner = () => {
  const dispatch = useDispatch();
  const practitionerHeader = [];
  const practitioner = useSelector(
    (state) => state.practitioners.practitioners
  );
  const results = practitioner.results;

  useEffect(() => {
    dispatch(practitionersFetch());
  }, []);

  console.log(results, "ini master");
  if (practitioner != undefined && results) {
    for (const [key, value] of Object.entries(results[0])) {
      if (key != "id") {
        practitionerHeader.push({
          Header: key ? key.toUpperCase() : "",
          accessor: key ? key : "",
        });
      }
    }
  }

  console.log(practitionerHeader, "ini Header");

  return (
    <>
      {results && results.length > 0 && (
        <ListPractitioners
          columnsData={practitionerHeader}
          tableData={results}
        />
      )}
    </>
  );
};

export default Practitioner;
