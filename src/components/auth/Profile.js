import React, { useContext } from "react";
import { UserContext } from "../../providers/UserProvider";
import { auth } from "../../firebase";
import { Redirect } from "@reach/router";


function Profile() {
    const user = useContext(UserContext)
    if( user === null || user === undefined) return (<Redirect noThrow to="/signIn"/>);
    const {displayName, email, photoURL} = user;
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-sm-6">
          <div className="card">
            <div className="card-body">
              <div
                style={{
                  background: `url(${
                    photoURL ||
                    "https://res.cloudinary.com/dqcsk8rsc/image/upload/v1577268053/avatar-1-bitmoji_upgwhc.png"
                  })  no-repeat center center`,
                  backgroundSize: "cover",
                  height: "100px",
                  width: "100px",
                }}
                className="border border-blue-300"
              ></div>
              <div >
                <h3 >{displayName}</h3>
                <h4 className="italic">{email}</h4>
              </div>
            </div>

            <div className="col-sm-4">
              <button
                className="btn btn-danger"
                onClick={() => {
                  auth.signOut();
                }}
              >
                Sign out
              </button>
            </div>
          </div>
        </div>
        <div className="col-sm-8">
            <div className="card">
                <div className="card-body">
                    Highest Score: 5
                    Latest Score: 10
                </div>

            </div>

        </div>
      </div>
    </div>
  );
}

export default Profile;
