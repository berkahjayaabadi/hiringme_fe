import axios from "axios";

const getAllCompanyRequest = () => {
  return {
    type: "GET_ALL_DATA_COMPANY_REQUEST",
  };
};

const getAllCompanySuccess = (data) => {
  return {
    type: "GET_ALL_DATA_COMPANY_SUCCESS",
    payload: data,
  };
};

const getAllCompanyFail = (err) => {
  return {
    type: "GET_ALL_DATA_COMPANY_FAIL",
    payload: err,
  };
};

export const getAllCompany = () => {
  return (dispatch) => {
    dispatch(getAllCompanyRequest());
    return axios
      .get(`https://gas-crack-production.up.railway.app/api/v1/company`)
      .then((res) => {
        dispatch(getAllCompanySuccess(res.data.data));
      })
      .catch((err) => {
        dispatch(getAllCompanyFail(err.response.data));
      });
  };
};

//Get By Id

const getCompanyByIdRequest = (id) => {
  return {
    type: "GET_DATA_COMPANY_BY_ID_REQUEST",
    payload: id,
  };
};

const getCompanyByIdSuccess = (data) => {
  return {
    type: "GET_DATA_COMPANY_BY_ID_SUCCESS",
    payload: data,
  };
};

const getCompanyByIdFail = (err) => {
  return {
    type: "GET_DATA_COMPANY_BY_ID_FAIL",
    payload: err,
  };
};

export const getCompanyById = (id) => {
  return (dispatch) => {
    dispatch(getCompanyByIdRequest(id));
    return axios
      .get(`http://localhost:5000/api/v1/auth/users/${id}`)
      .then((res) => {
        dispatch(getCompanyByIdSuccess(res.data.data));
      })
      .catch((err) => {
        dispatch(getCompanyByIdFail(err.response.data));
      });
  };
};

// Post

const postCompanySuccess = (data) => {
  return {
    type: "POST_ALL_DATA_COMPANY_SUCCESS",
    payload: data,
  };
};

const postCompanyFail = (err) => {
  return {
    type: "POST_ALL_DATA_COMPANY_FAIL",
    payload: err,
  };
};

export const postCompany = (postData) => {
  return (dispatch) => {
    return axios({
      method: "Post",
      url: "https://63dbba8ec45e08a0434c7f61.mockapi.io/Worker",
      data: postData,
    })
      .then((res) => {
        dispatch(postCompanySuccess(res.data));
      })
      .catch((err) => {
        dispatch(postCompanyFail(err.response.data));
      });
  };
};

// Patch By Id

const patchCompanySuccess = (data) => {
  return {
    type: "PATCH_ALL_DATA_COMPANY_SUCCESS",
    payload: data,
  };
};

const patchCompanyFail = (err) => {
  return {
    type: "PATCH_ALL_DATA_COMPANY_FAIL",
    payload: err,
  };
};

export const patchCompany = (patchData, id) => {
  return (dispatch) => {
    return axios({
      method: "PATCH",
      url: `http://localhost:5000/api/v1/profileDashboard/skill/1d4f1de3-b4bc-4987-87bd-a157f490d1f0`,
      data: patchData,
    })
      .then((res) => {
        dispatch(patchCompanySuccess(res.data.data));
      })
      .catch((err) => {
        dispatch(patchCompanyFail(err.response.data));
      });
  };
};
