import React from "react";
import { Route } from "react-router-dom";
import LoginPage from "./components/LoginPage";
import RegisterPage from "./components/RegisterPage";

console.log("test1241");

console.log("test1241");
console.log("test1241");

const App = () => {
  return (
    <div>
      <Route component={LoginPage} path="/login" />
      <Route component={RegisterPage} path="/register" />
    </div>
  );
};

export default App;
