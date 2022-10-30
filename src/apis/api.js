import instance from "@apis/instance";

export const issuesAPI = {
  getIssues: (page) => {
    return instance.get(`/issues?sort=comments&per_page=20&page=${page}`);
  },

  getIssue: (issueNumber) => {
    return instance.get(`/issues/${issueNumber}`);
  },
};
