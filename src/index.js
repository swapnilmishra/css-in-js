import React from "react";
import ReactDOM from "react-dom";

import App from "./App";

const bgColor = "pink";

const rootElement = document.getElementById("root");
ReactDOM.render(<App bgColor={bgColor} />, rootElement);
