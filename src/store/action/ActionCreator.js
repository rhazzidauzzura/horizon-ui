import Swal from "sweetalert2";
import { FETCH_PRACTITIONERS } from "./ActionTypes";
import axios from "axios";

const api = axios.create({
  // baseURL: "http://localhost:3000",
  baseURL: "https://dev-hub.zicare.id/api",
});

let url = "http://localhost:3000";

// let baseUrl = "https://dev-hub.zicare.id/api/practitioner/list/A2021/10"

export const practitionersFetch = (query, pageIndex) => {
  return async (dispatch, getState) => {
    //  fetch(`${baseUrl}/masterData`, {
    //   method: "GET"
    //   // headers: {
    //   //   "Authorization": basicAuth,
    //   //   "withCredentials": false,
    //   //   "Content-Type" : "application/json",
    //   //   "Accept" : "*/*"
    //   // },
    // })
    //   .then(async (response) => {
    //     if (!response.ok) {
    //       throw new Error("Network was not ok");
    //     }
    //     return response.json();
    //   })
    //   .then((data) => {
    //     dispatch(masterFetchSuccess(data));

    //     // console.log(data);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });

    try {
      const res = await api.get("/practitioner/list/A2021/10", {
        // headers: {
        //   Token: localStorage.Token,
        // },
        auth: {
          username: "sysdev",
          password: "sysdev",
        },
      });
      // toast('success', `Success Deleted Data Patient`)
      dispatch(practitionerFetchSuccess(res.data));

      console.log("RESPONS", res.data);
    } catch (error) {
      // toast('error', error.message)
      console.log(error);
    }
  };
};

export const practitionerFetchSuccess = (payload) => {
  return {
    type: FETCH_PRACTITIONERS,
    payload: payload,
  };
};

export const addMaster = (payload) => {
  return async (dispatch, getState) => {
    try {
      const res = await api.post("/masterData", payload);
      // toast('success', `Success Deleted Data Patient`)
      console.log("MASUKK AD");
      dispatch(practitionersFetch());
    } catch (error) {
      // toast('error', error.message)
      console.log(error);
    }
  };
};

export const deleteMaster = (id) => {
  return (dispatch, getState) => {
    fetch(`${url}/masterData/${id}`, {
      method: "DELETE",
      // headers: {
      //   access_token: localStorage.access_token,
      // },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(response);
        }
        return response.json();
      })
      .then((data) => {
        // console.log("Success:", data);
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
        });
        dispatch(practitionersFetch());
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
};
