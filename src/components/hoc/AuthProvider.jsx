import {createContext, useEffect, useState} from "react";

export const AuthContext = createContext(null);
const AuthProvider = ({children}) => {
    const [auth, setAuth] = useState(null);

    useEffect(() => {
        if (localStorage.getItem("user") !== null) {
            setAuth(JSON.parse(localStorage.getItem("user")));
        }
    }, []);

    return (
        <>
            <AuthContext.Provider
                value={{
                    auth,
                    setAuth,
                }}
            >
                {children}
            </AuthContext.Provider>
        </>
    );
};
export default AuthProvider;

