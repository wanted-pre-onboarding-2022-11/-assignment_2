import axios from "axios";

const { REACT_APP_API_END_POINT, REACT_APP_AUTH_TOKEN } = process.env;

const headers = {
  Authorization: REACT_APP_AUTH_TOKEN,
};

export const getIssues = async () => {
  try {
    return await axios.get(`${REACT_APP_API_END_POINT}`, headers);
  } catch (error) {
    console.error(error);
  }
};
