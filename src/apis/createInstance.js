import axios from "axios";

const BASE_URL = "https://api.github.com";

export const createInstance = ({ url = BASE_URL, config = {} }) => {
  return axios.create({
    baseURL: url,
    timeout: 3000,
    ...config,
  });
};
