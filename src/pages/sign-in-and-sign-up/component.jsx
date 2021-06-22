import React from "react";
import SignIn from "../../components/sign-in/component";
import SignUp from "../../components/sign-up/component";

import "./style.scss";

export const SignInAndSignUpPage = () => (
  <div className="sign-in-and-sign-up">
    <SignIn />
    <SignUp />
  </div>
);
