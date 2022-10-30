import { useCallback, useEffect, useState } from "react";
import { getIssues } from "@/apis";

export const useIssues = () => {
  const [issues, setIssues] = useState(null);
  const fetchData = useCallback(async () => {
    const { data } = await getIssues();
    setIssues(data);
  }, []);
  useEffect(() => {
    !issues && fetchData();
  }, [fetchData, issues]);

  return issues;
};
