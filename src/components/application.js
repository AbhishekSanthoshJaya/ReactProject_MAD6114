import React, {useContext} from "react";
import { Router } from "@reach/router";
import SignIn from "./auth/SignIn";
import SignUp from "./auth/SignUp";
import ProfilePage from "./auth/Profile";
import QuizView from "./quiz/QuizView"
import PasswordReset from "./auth/PasswordReset";
import { UserContext } from "./../providers/UserProvider";

function Application() {
  return (
    <Router>
      <SignUp path="/signUp" />

      <ProfilePage path="/profile" />
      <QuizView path="/quiz" />
      <PasswordReset path="/passwordReset" />
      <SignIn path="/signIn" />
      <QuizView path="/" />
    </Router>
  );
}
export default Application;
