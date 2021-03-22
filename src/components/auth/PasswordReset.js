import React,{useState} from 'react'
import { Link } from "@reach/router";
import {auth } from "./../../firebase"

function PasswordReset() {

    const [email, setEmail] = useState("");
    const [emailHasBeenSent, setEmailHasBeenSent] = useState(false);
    const [error, setError] = useState(null);
    const onChangeHandler = (event) => {
      const { name, value } = event.currentTarget;
      if (name === "userEmail") {
        setEmail(value);
      }
    };
    const sendResetEmail = (event) => {
      event.preventDefault();
       auth
         .sendPasswordResetEmail(email)
         .then(() => {
           setEmailHasBeenSent(true);
           setTimeout(() => {
             setEmailHasBeenSent(false);
           }, 3000);
         })
         .catch(() => {
           setError("Error resetting password");
         });
    };
    return (
      <>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-sm-6 ">
              <div className="card">
                <div className="card-header">Password Reset</div>
                <div className="card-body">
                  {emailHasBeenSent && (
                    <div className="text-success">
                      An email has been sent to you!
                    </div>
                  )}
                  {error !== null && (
                    <div className="text-danger">
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
                    <button
                      type="button"
                      className="btn btn-primary"
                      onClick={sendResetEmail}
                    >
                      Reset
                    </button>
                    
                    <Link
                      to="signUp"
                      className="text-blue-500 hover:text-blue-600"
                    >
                      Sign In
                    </Link>{" "}
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
}

export default PasswordReset
