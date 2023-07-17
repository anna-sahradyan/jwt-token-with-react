import React, {useContext} from 'react';
import {Navigate, useLocation} from "react-router";
import {AuthContext} from "./AuthProvider";



const RequireAuth = ({children}) => {
    const location = useLocation();
    const {user} = useContext(AuthContext);

    if (!user) {
        return <Navigate to={"/auth"} state={{from: location}}/>
    }
    return children;
};

export default RequireAuth;
