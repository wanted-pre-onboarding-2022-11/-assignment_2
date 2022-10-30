import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.github.com/repos/angular/angular-cli",
  headers: {
    Accept: "application/vnd.github+json",
    Authorization: `Bearer ${process.env.REACT_APP_GITHUB_TOKEN}`,
  },
});

export default instance;
