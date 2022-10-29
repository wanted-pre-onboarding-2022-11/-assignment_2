import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.github.com",
  timeout: 2000,
});

instance.interceptors.request.use(
  (config) => {
    const newConfig = { ...config };
    if (process.env.REACT_APP_AUTH)
      newConfig.headers.Authorization = `token ${process.env.REACT_APP_AUTH}`;

    return newConfig;
  },
  (e) => e,
);

export const getIssueList = async (page) => {
  const res = await instance.get(
    `/repos/angular/angular-cli/issues?state=open&sort=comments&direction=desc&per_page=20&page=${page}`,
  );

  return res.data;
};

export const getIssue = async (number) => {
  const res = await instance.get(`/repos/angular/angular-cli/issues/${number}`);

  return res.data;
};

export const getUserData = async () => {
  const res = await instance.get(`/user`);

  return res.data;
};
