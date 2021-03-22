import React, { useState, useContext } from "react";
import { UserContext } from "../../providers/UserProvider";
import { Link } from "@reach/router";
import {signInWithGoogle, auth} from './../../firebase'
import { Redirect } from "@reach/router";


function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const signInWithEmailAndPasswordHandler = (event) => {
    event.preventDefault();
    auth.signInWithEmailAndPassword(email, password).catch((error) => {
      setError("Error signing in with password and email!");
      console.error("Error signing in with password and email", error);
    });
  };

  const onChangeHandler = (event) => {
    const { name, value } = event.currentTarget;

    if (name === "userEmail") {
      setEmail(value);
    } else if (name === "userPassword") {
      setPassword(value);
    }
  };

   const user = useContext(UserContext);
   if (user) return <Redirect noThrow to="/quiz" />;
  return (
    <>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-sm-6 ">
            <div className="card">
              <div className="card-header">Sign In</div>
              <div className="card-body">
                {error !== null && (
                  <div className="text-danger" >
                    {error}
                  </div>
                )}

                <form className="">
                  <div className="form-group">
                    <label for="email-input">Email</label>
                    <input
                      type="email"
                      name="userEmail"
                      class="form-control"
                      id="email-input"
                      value={email}
                      onChange={(event) => onChangeHandler(event)}
                    />
                  </div>
                  <div className="form-group">
                    <label for="password-input">Password</label>
                    <input
                      type="password"
                      class="form-control"
                      name="userPassword"
                      id="password-input"
                      value={password}
                      onChange={(event) => onChangeHandler(event)}
                    />
                  </div>
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={signInWithEmailAndPasswordHandler}
                  >
                    Login
                  </button>
                  <p style={{textAlign : 'center'}}> Or </p>
                  <button type="button" className="btn btn-danger" onClick={ signInWithGoogle }>Sign In with Google</button>

                  <p className="text-center my-3">
                    Don't have an account?{" "}
                    <Link
                      to="signUp"
                      className="text-blue-500 hover:text-blue-600"
                    >
                      Sign up here
                    </Link>{" "}
                    <br />{" "}
                    <Link
                      to="passwordReset"
                      className="text-blue-500 hover:text-blue-600"
                    >
                      Forgot Password?
                    </Link>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignIn;
