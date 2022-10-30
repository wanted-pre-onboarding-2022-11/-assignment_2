import { createContext } from "react";

export const initialState = {
  loading: true,
  data: null,
  error: null,
};

export const IssuesReducer = (state, action) => {
  switch (action.type) {
    case "LOADING":
      return {
        ...state,
        loading: true,
      };
    case "GET_SUCCESS":
      return {
        ...state,
        loading: false,
        data: action.data,
      };
    case "GET_ERROR":
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    default:
      throw new Error(`잘못된 ${action.type} 입니다.`);
  }
};

export const Issuesdispatch = createContext(null);
export const IssuesState = createContext(null);
