import { createContext, useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { getIssueList } from "./apis";
import Detail from "./components/Detail";
import Layout from "./components/Layout";
import List from "./components/List";
import handleScroll from "./utils/scroll";
export const Context = createContext();

function App() {
  const [getLists, setGetLists] = useState([]);

  const result = async () => {
    try {
      const result = await getIssueList();
      setGetLists(result);
    } catch (error) {
      // console.log(error);
    }
  };
  useEffect(() => {
    result();
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Layout>
      <Context.Provider value={{ getLists }}>
        <Routes>
          <Route path="/" element={<List />} />
          <Route path="/detail/:id" element={<Detail />} />
        </Routes>
      </Context.Provider>
    </Layout>
  );
}

export default App;
