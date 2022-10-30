import Router from "@routes/Router";

import Layout from "@components/Layout";
import Header from "@components/Header";

const App = () => {
  return (
    <Layout>
      <Header />
      <Router />
    </Layout>
  );
};

export default App;
