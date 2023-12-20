import Swal from "sweetalert2";
import { FETCH_MASTER_DATA } from "./ActionTypes";
import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000",
});

let baseUrl = "http://localhost:3000";

// let baseUrl = "https://dev-hub.zicare.id/api/practitioner/list/A2021/10"

export const masterDataFetch = (query, pageIndex) => {
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
        const res = await api.get('/masterData')
        // toast('success', `Success Deleted Data Patient`)
        dispatch(masterFetchSuccess(res))
      } catch (error) {
        // toast('error', error.message)
        console.log(error);
      }
  };
};

export const masterFetchSuccess = (payload) => {
  return {
    type: FETCH_MASTER_DATA,
    payload: payload,
  };
};

export const addMaster = (payload) => {
  return (dispatch, getState) => {
    return fetch(`${baseUrl}/masterData`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // access_token: localStorage.access_token,
      },
      body: JSON.stringify(payload),
    })
      .then(async (response) => {
        if (!response.ok) {
          const error = await response.json();
          console.log(error);
          throw new Error(error.message);
        }
        return response.json();
      })
      .then((data) => {
        dispatch(masterDataFetch());
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
};

export const deleteMaster = (id) => {
  return (dispatch, getState) => {
    fetch(`${baseUrl}/masterData/${id}`, {
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
          icon: "success"
        });
        dispatch(masterDataFetch());
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
};
