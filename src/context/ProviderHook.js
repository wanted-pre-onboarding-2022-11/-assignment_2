import { useContext } from "react";
import { Issuesdispatch, IssuesState } from ".";

export function useIssuesState() {
  const state = useContext(IssuesState);
  if (!state) {
    throw new Error("Cannot find UsersProvider");
  }
  return state;
}

export function useIssuesDispatch() {
  const dispatch = useContext(Issuesdispatch);
  if (!dispatch) {
    throw new Error("Cannot find UsersProvider");
  }
  return dispatch;
}
