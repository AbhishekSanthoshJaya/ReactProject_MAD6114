import React , {useState} from 'react'
import { Link } from "@reach/router";
import { signInWithGoogle, auth , generateUserDocument} from "./../../firebase";



function SignUp() {

     const [email, setEmail] = useState("");
     const [password, setPassword] = useState("");
     const [displayName, setDisplayName] = useState("");
     const [error, setError] = useState(null);
     const createUserWithEmailAndPasswordHandler = async (event) => {
            event.preventDefault();
            try{
                const {user} = await auth.createUserWithEmailAndPassword(email, password);
                generateUserDocument(user, {displayName});
            }
            catch(error){
                setError('Error Signing up with email and password');
            }

            setEmail("");
            setPassword("");
            setDisplayName("");
     };
     const onChangeHandler = (event) => {
       const { name, value } = event.currentTarget;
       if (name === "userEmail") {
         setEmail(value);
       } else if (name === "userPassword") {
         setPassword(value);
       } else if (name === "userName") {
         setDisplayName(value);
       }
     };
    return (
      <>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-sm-6 ">
              <div className="card">
                <div className="card-header">Sign Up</div>
                <div className="card-body">
                  {error !== null && (
                    <div className="text-danger">
                      {error}
                    </div>
                  )}

                  <form className="">
                    <div className="form-group">
                      <label for="name-input">Full Name</label>
                      <input
                        type="text"
                        name="userName"
                        class="form-control"
                        id="name-input"
                        value={displayName}
                        onChange={(event) => onChangeHandler(event)}
                      />
                    </div>
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
                      onClick={createUserWithEmailAndPasswordHandler}
                    >
                      Sign Up
                    </button>
                    <p> Or </p>
                    <button type="button" className="btn btn-danger">
                      Sign In with Google
                    </button>

                    <p className="text-center my-3">
                      have an account?{" "}
                      <Link
                        to="/"
                        className="text-blue-500 hover:text-blue-600"
                      >
                        Sign In here
                      </Link>{" "}
                      <br />{" "}
                      <Link
                        to="/passwordReset"
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

export default SignUp
