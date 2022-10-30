import { Octokit } from "octokit";

const { REACT_APP_AUTH_KEY } = process.env;

const octokit = new Octokit({
  auth: REACT_APP_AUTH_KEY,
});

const getIssuesByPage = async (page = 1) => {
  try {
    const data = await octokit.request("GET /repos/angular/angular-cli/issues", {
      owner: "OWNER",
      repo: "REPO",
      sort: "comments",
      page,
    });
    if (data.status === 200) {
      return data.data;
    }
    throw new Error("fetch error.");
  } catch (e) {
    throw new Error("fetch error.");
  }
};

export default getIssuesByPage;
