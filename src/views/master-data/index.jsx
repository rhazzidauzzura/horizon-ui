import {
  columnsData,
} from "./variables/columnsData";
import tableDataMaster from "./variables/tableMasterData.json";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import ListMasterData from "./components/practitioner";
// import { masterDataFetch } from "store/action/Practitioner";
import { masterDataFetch } from "store/action/ActionCreator";

const PractitionerView = () => {
    const dispatch = useDispatch();

    const practitionerHeader = []
    const practitioner = useSelector((state) => state.masters.practitioner);

    useEffect(() => {
        dispatch(masterDataFetch());
    }, []);
    
    console.log(practitioner.data, "ini master");
   if(practitioner != undefined && practitioner.data ){
    for (const [key, value] of Object.entries(practitioner.data[0])) {
        if(key != 'id'){
            practitionerHeader.push({
                Header : key? key.toUpperCase() : "",
                accessor : key? key : ""
            })
        }
    }
   }

    console.log(practitionerHeader, "ini Header");

    

  return (
        <>
          {
            practitioner.data && practitioner.data.length > 0 && <ListMasterData columnsData={practitionerHeader} tableData={practitioner.data} />  
          }  
        </>
  );
};

export default PractitionerView;
