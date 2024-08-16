// eslint-disable-next-line no-unused-vars
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import ErrorBoundary from "./components/ErrorBoundary";
import Layout from "./Layout/PageWrapper/Layout";
import { routers } from "./Routes/routers";

const App: React.FC = () => {
  return (
    <ErrorBoundary>
      <Router>
        <Layout>{routers}</Layout>
      </Router>
    </ErrorBoundary>
  );
};

export default App;
