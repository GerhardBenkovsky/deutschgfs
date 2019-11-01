import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";
import "./index.css";
import MainPage from "./components/mainpage.jsx";

ReactDOM.render(<MainPage />, document.getElementById("root"));

serviceWorker.unregister();
