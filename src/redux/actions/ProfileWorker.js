import axios from "axios";
// import { useParams } from "react-router-dom";

const getAllprofileRequest = () => {
  return {
    type: "GET_ALL_DATA_PROFILE_REQUEST",
  };
};

const getAllProfileSuccess = (data) => {
  return {
    type: "GET_ALL_DATA_PROFILE_SUCCESS",
    payload: data,
  };
};

const getAllProfileFail = (err) => {
  return {
    type: "GET_ALL_DATA_PROFILE_FAIL",
    payload: err,
  };
};

export const getAllProfile = () => {
  return (dispatch) => {
    dispatch(getAllprofileRequest());
    return axios
      .get(`http://localhost:5000/api/v1/auth/users`)
      .then((res) => {
        dispatch(getAllProfileSuccess(res.data.data));
      })
      .catch((err) => {
        dispatch(getAllProfileFail(err.response.data));
      });
  };
};

//GET BY ID

const getProfileByIdRequest = (id) => {
  return {
    type: "GET_DATA_PROFILE_BY_ID_REQUEST",
    payload: id,
  };
};

const getProfileByIdSuccess = (data) => {
  return {
    type: "GET_DATA_PROFILE_BY_ID_SUCCESS",
    payload: data,
  };
};

const getProfileByIdFail = (err) => {
  return {
    type: "GET_DATA_PROFILE_BY_ID_FAIL",
    payload: err,
  };
};

export const getProfileById = (id) => {
  return (dispatch) => {
    dispatch(getProfileByIdRequest(id));
    return axios
      .get(`http://localhost:5000/api/v1/auth/user/${id}`)
      .then((res) => {
        dispatch(getProfileByIdSuccess(res.data.data));
      })
      .catch((err) => {
        dispatch(getProfileByIdFail(err.response.data));
      });
  };
};

// Post

const postProfileSuccess = (data) => {
  return {
    type: "POST_ALL_DATA_PROFILE_SUCCESS",
    payload: data,
  };
};

const postProfileFail = (err) => {
  return {
    type: "POST_ALL_DATA_PROFILE_FAIL",
    payload: err,
  };
};

export const postProfile = (postData) => {
  return (dispatch) => {
    return axios({
      method: "POST",
      url: "http://localhost:5000/api/v1/auth/register",
      data: postData,
    })
      .then((res) => {
        dispatch(postProfileSuccess(res.data));
      })
      .catch((err) => {
        dispatch(postProfileFail(err.response.data));
      });
  };
};

// Patch By Id

const patchProfileSuccess = (data) => {
  return {
    type: "PATCH_ALL_DATA_PROFILE_SUCCESS",
    payload: data,
  };
};

const patchProfileFail = (err) => {
  return {
    type: "PATCH_ALL_DATA_PROFILE_FAIL",
    payload: err,
  };
};

export const patchProfile = (patchData, id) => {
  return (dispatch) => {
    return axios({
      method: "PATCH",
      url: `http://localhost:5000/api/v1/auth/users/${id}`,
      headers: {
        "content-type": "multipart/form-data",
      },
      data: patchData,
    })
      .then((res) => {
        dispatch(patchProfileSuccess(res.data.data));
      })
      .catch((err) => {
        dispatch(patchProfileFail(err.response.data));
      });
  };
};
