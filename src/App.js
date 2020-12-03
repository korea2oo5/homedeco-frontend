import React from "react";
import { Route } from "react-router-dom";
import LoginPage from "./components/LoginPage";
import RegisterPage from "./components/RegisterPage";

console.log("test1241");

console.log("여기추가");

console.log("여기 하나 더 추가");
const App = () => {
  return (
    <>
      <Route component={LoginPage} path="/login" />
      <Route component={RegisterPage} path="/register" />
    </>
  );
};

export default App;
