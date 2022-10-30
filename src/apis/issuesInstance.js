import { createInstance } from "./createInstance";
import { env } from "../utils/env";
import { parseResponseDatas } from "../utils/dataParser";

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

  getIssues() {
    return this.#instance.get(`/repos/angular/angular-cli/issues`, {
      params: {
        sort: this.#sort,
        page: this.#page++,
        per_page: this.#perPage,
      },
    });
  }

  async getNextPage() {
    const { data } = await this.getIssues();
    return parseResponseDatas(data);
  }
}

export default new issueInstance();
