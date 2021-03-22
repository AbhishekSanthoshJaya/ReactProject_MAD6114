import { Link } from "@reach/router";
import React, {useContext} from "react";
import { UserContext } from "./../providers/UserProvider";


function Nav() {
      const user = useContext(UserContext);

    let button = null;
    if(user) button = (
      <Link to="/profile" class="c-header-nav-item c-header-nav-link ">
        Profile
      </Link>
    )
    else{
         <Link to="/signIn" class="c-header-nav-item c-header-nav-link ">
           Sign In
         </Link>;
    }

  return (
    <div class="c-header-nav">
      <Link to="/" class="c-header-nav-item c-header-nav-link active">
        Home
      </Link>
      <Link to="/quiz" class="c-header-nav-item c-header-nav-link ">
        Quiz
      </Link>
      {button}
    </div>
  );
}

export default Nav;
