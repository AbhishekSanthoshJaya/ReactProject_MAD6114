import React from "react";
import QuizView from './../components/quiz/QuizView'
import SignIn from "./../components/auth/SignIn";
import Application from "./../components/application"
import Nav from "./Nav"
function base() {
  return (
    <div>
      <body className="c-app">
        <div className="c-sidebar">sidebar</div>
        <div className="c-wrapper">
          <header className="c-header c-header-light px-3">
            <Nav/>
          </header>
          <div className="c-body">
            <main className="c-content">
              <Application></Application>
            </main>
          </div>
        </div>
      </body>
    </div>
  );
}

export default base;
