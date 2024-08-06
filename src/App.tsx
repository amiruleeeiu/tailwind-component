// eslint-disable-next-line no-unused-vars
import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import ButtonPage from "./pages/ButtonPage";
import FormPage from "./pages/FormPage";
import InputPage from "./pages/InputPage";
import TablePage from "./pages/TablePage";

const App: React.FC = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/form" element={<FormPage />} />
          <Route path="/input" element={<InputPage />} />
          <Route path="/button" element={<ButtonPage />} />
          <Route path="/table" element={<TablePage />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
