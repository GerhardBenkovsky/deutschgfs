import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Display from "./components/display";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(<Display />, document.getElementById("root"));

serviceWorker.unregister();
