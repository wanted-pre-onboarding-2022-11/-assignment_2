import { useReducer } from "react";
import { initialState, Issuesdispatch, IssuesReducer, IssuesState } from ".";

export const IssuesProvider = ({ children }) => {
  const [state, dispatch] = useReducer(IssuesReducer, initialState);
  return (
    <IssuesState.Provider value={state}>
      <Issuesdispatch.Provider value={dispatch}>{children}</Issuesdispatch.Provider>
    </IssuesState.Provider>
  );
};
