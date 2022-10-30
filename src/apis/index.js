import axios from "axios";

const { REACT_APP_API_END_POINT, REACT_APP_AUTH_TOKEN } = process.env;

const headers = {
  Authorization: REACT_APP_AUTH_TOKEN,
};

export const getIssues = async (dispatch) => {
  try {
    const response = await axios.get(`${REACT_APP_API_END_POINT}`, headers);
    dispatch({ type: "GET_SUCCESS", data: response.data });
  } catch (error) {
    dispatch({ type: "GET_ERROR", error });
  }
};
