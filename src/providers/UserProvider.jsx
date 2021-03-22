import React, { createContext, useState, useEffect } from "react";
import { auth } from "../firebase";
import { generateUserDocument } from "./../firebase"
export const UserContext = createContext({ user: null });

function UserProvider(props) {
    const [user, setuser] = useState(null)

   

    useEffect(() => {
       
        auth.onAuthStateChanged( async userAuth => {
            const user = await generateUserDocument(userAuth);
            console.log(user)
            setuser(user)
        });
    }, [])

    return (
         <UserContext.Provider value={user}>
            {props.children}
        </UserContext.Provider>
    )
}

export default UserProvider
