import React, { createContext, useContext, useReducer } from "react";

const initialState = {
  issues: {
    loading: false,
    data: null,
    error: null,
  },
  issue: {
    loading: false,
    data: null,
    error: null,
  },
};

const loadingState = {
  loading: true,
  data: null,
  error: null,
};

const success = (data) => ({
  loading: false,
  data,
  error: null,
});

const error = (error) => ({
  loading: false,
  data: null,
  error,
});

const issuesReducer = (state, action) => {
  const prevArr = state.issues.data || [];
  switch (action.type) {
    //메인페이지에서 issues 불러올때
    case "GET_ISSUES":
      return {
        ...state,
        issues: loadingState,
      };
    case "GET_ISSUES_SUCCESS":
      return {
        ...state,
        issues: success([...prevArr, ...action.data]),
      };
    case "GET_ISSUES_ERROR":
      return {
        ...state,
        issues: error(action.error),
      };

    //상세페이지에서 issue 불러올때
    case "GET_ISSUE":
      return {
        ...state,
        issue: loadingState,
      };
    case "GET_ISSUE_SUCCESS":
      return {
        ...state,
        issue: success(action.data),
      };
    case "GET_ISSUE_ERROR":
      return {
        ...state,
        issue: error(action.error),
      };

    default:
      throw new Error(`Unhanded action type: ${action.type}`);
  }
};

const IssuesStateContext = createContext(null);
const IssuesDispatchContext = createContext(null);

export const IssuesProvider = ({ children }) => {
  const [state, dispatch] = useReducer(issuesReducer, initialState);

  return (
    <IssuesStateContext.Provider value={state}>
      <IssuesDispatchContext.Provider value={dispatch}>{children}</IssuesDispatchContext.Provider>
    </IssuesStateContext.Provider>
  );
};

export const useIssuesState = () => {
  const state = useContext(IssuesStateContext);
  if (!state) {
    throw new Error("Cannot find IssuesProvider");
  }
  return state;
};

export const useIssuesDispatch = () => {
  const dispatch = useContext(IssuesDispatchContext);
  if (!dispatch) {
    throw new Error("Cannot find IssuesProvider");
  }
  return dispatch;
};
