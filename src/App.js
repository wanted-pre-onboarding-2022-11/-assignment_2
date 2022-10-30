import Router from "@/routes";
import { IssueContextProvider } from "@/contexts/IssueContext";

function App() {
  return (
    <IssueContextProvider>
      <Router />
    </IssueContextProvider>
  );
}

export default App;
