// eslint-disable-next-line no-unused-vars
import React, { Suspense } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import UserService from "UserService";
import ErrorBoundary from "./components/ErrorBoundary";
import Layout from "./Layout/PageWrapper/Layout";
import { routers } from "./Routes/routers";

const App: React.FC = () => {
  console.log(UserService.isLoggedIn());

  return (
    <ErrorBoundary>
      <Suspense fallback={<div>Loading...</div>}>
        <Router>
          <Layout>{routers}</Layout>
        </Router>
      </Suspense>
    </ErrorBoundary>
  );
};

export default App;
