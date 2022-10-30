import { createInstance } from "./createInstance";
import { env } from "../utils/env";

class issueInstance {
  //private
  #sort;
  #page;
  #perPage;
  #instance;

  constructor() {
    this.#sort = "comments";
    this.#page = 1;
    this.#perPage = 10;
    this.#instance = createInstance({
      config: {
        headers: {
          Accept: "application/vnd.github+json",
          Authorization: env.githubToken,
        },
      },
    });
  }

  getPerPage() {
    return this.#perPage;
  }

  fetchIssues() {
    return this.#instance.get(`/repos/angular/angular-cli/issues`, {
      params: {
        sort: this.#sort,
        page: this.#page++,
        per_page: this.#perPage,
      },
    });
  }
  fetchIssue(id) {
    return this.#instance.get(`/repos/angular/angular-cli/issues/${id}`);
  }

  parseResponseData(data) {
    return {
      id: data.id,
      url: data.url,
      number: data.number,
      title: data.title,
      body: data.body,
      user: {
        id: data.user.id,
        login: data.user.login,
        profileImage: data.user.avatar_url,
      },
      createdAt: data.created_at,
      comments: data.comments,
    };
  }

  parseResponseDatas(datas) {
    return datas.map((data) => this.parseResponseData(data));
  }

  async getNextPage() {
    const { data } = await this.fetchIssues();
    return this.parseResponseDatas(data);
  }
}

export default new issueInstance();
