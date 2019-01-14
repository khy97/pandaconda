import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import HomeContent from "./HomeContent";

const loginPage = document.getElementById("loginPage");
if (loginPage) {
  ReactDOM.render(<App />, loginPage);
}

const homePage = document.getElementById("homePage");
if (homePage) {
  ReactDOM.render(<HomeContent />, homePage);
}
