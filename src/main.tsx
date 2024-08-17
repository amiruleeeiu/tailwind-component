import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import UserService from "../UserService.js";
import { store } from "./app/store.js";
import "./index.css";
import App from "./App.js";

const renderApp = () =>
  ReactDOM.createRoot(document.getElementById("root")).render(
    <Provider store={store}>
      <App />
    </Provider>
  );

UserService.initKeycloak(renderApp);
