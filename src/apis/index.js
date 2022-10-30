import { Octokit } from "octokit";

export const getIssueList = async () => {
  try {
    const octokit = new Octokit({
      auth: process.env.REACT_APP_TOKEN,
    });
    const result = await octokit.request("GET /repos/{owner}/{repo}/issues", {
      owner: "angular",
      repo: "angular-cli",
      sort: "comments",
      state: "open",
      page: 1,
    });
    return result.data;
  } catch (error) {
    // console.log(error);
  }
};

export const fetchMoreIssueList = async (pageNum) => {
  try {
    const octokit = new Octokit({
      auth: process.env.REACT_APP_TOKEN,
    });
    const result = await octokit.request("GET /repos/{owner}/{repo}/issues", {
      owner: "angular",
      repo: "angular-cli",
      sort: "comments",
      state: "open",
      page: pageNum,
    });
    return result.data;
  } catch (error) {
    // console.log(error);
  }
};

export const getIssueDetail = async (id) => {
  try {
    const octokit = new Octokit({
      auth: process.env.REACT_APP_TOKEN,
    });
    const result = await octokit.request("GET /repos/{owner}/{repo}/issues/{id}", {
      owner: "angular",
      repo: "angular-cli",
      id,
    });
    return result;
  } catch (error) {
    // console.log(error);
  }
};
