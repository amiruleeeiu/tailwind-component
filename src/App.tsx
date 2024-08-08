// eslint-disable-next-line no-unused-vars
import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import AccordionPage from "./pages/AccordionPage";
import AvatarPage from "./pages/AvatarPage";
import ButtonPage from "./pages/ButtonPage";
import CardPage from "./pages/CardPage";
import FormPage from "./pages/FormPage";
import InputPage from "./pages/InputPage";
import ModalPage from "./pages/ModalPage";
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
          <Route path="/accordion" element={<AccordionPage />} />
          <Route path="/modal" element={<ModalPage />} />
          <Route path="/card" element={<CardPage />} />
          <Route path="/avatar" element={<AvatarPage />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
