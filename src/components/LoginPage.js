import React from "react";
import AuthTemplate from "./auth/AuthTemplate";
import AuthForm from "./auth/AuthForm";

const LoginPage = () => {
  return (
    <AuthTemplate>
      <AuthForm type="login" />
    </AuthTemplate>
  );
};

export default LoginPage;
