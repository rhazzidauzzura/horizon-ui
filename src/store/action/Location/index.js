import Swal from "sweetalert2";
import { FETCH_LOCATIONS } from "../ActionTypes";
import axios from "axios";

const api = axios.create({
  baseURL: "https://dev-hub.zicare.id/api",
});
let url = "http://localhost:3000";

export const locationsFetch = (query, pageIndex) => {
  return async (dispatch, getState) => {
    try {
      const res = await api.get("/location/list/A2021/10", {
        // headers: {
        //   Token: localStorage.Token,
        // },
        auth: {
          username: "sysdev",
          password: "sysdev",
        },
      });
      dispatch(locationFetchSuccess(res.data));

      console.log("RESPONS", res.data);
    } catch (error) {
      console.log(error);
    }
  };
};

export const locationFetchSuccess = (payload) => {
  return {
    type: FETCH_LOCATIONS,
    payload: payload,
  };
};

// export const addMaster = (payload) => {
//   return async (dispatch, getState) => {
//     try {
//       const res = await api.post("/masterData", payload);
//       // toast('success', `Success Deleted Data Patient`)
//       console.log("MASUKK AD");
//       dispatch(practitionersFetch());
//     } catch (error) {
//       // toast('error', error.message)
//       console.log(error);
//     }
//   };
// };

// export const deleteMaster = (id) => {
//   return (dispatch, getState) => {
//     fetch(`${url}/masterData/${id}`, {
//       method: "DELETE",
//       // headers: {
//       //   access_token: localStorage.access_token,
//       // },
//     })
//       .then((response) => {
//         if (!response.ok) {
//           throw new Error(response);
//         }
//         return response.json();
//       })
//       .then((data) => {
//         // console.log("Success:", data);
//         Swal.fire({
//           title: "Deleted!",
//           text: "Your file has been deleted.",
//           icon: "success",
//         });
//         dispatch(practitionersFetch());
//       })
//       .catch((error) => {
//         console.error("Error:", error);
//       });
//   };
// };
