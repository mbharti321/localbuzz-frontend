import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./static/css/myStyle.css";
import "./static/css/footer.css";
import "./static/css/header.css";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
