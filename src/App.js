import React from 'react';
import {Route, Routes} from "react-router";
import Auth from "./components/Auth/Auth";
import Register from "./components/Auth/Register";
import Header from "./components/Header";
import Home from "./components/Home";
import RequireAuth from "./components/hoc/RequireAuth";
import Welcome from "./components/Welcome";



const App = () => {
    return (
        <>

                <Header/>
                <Routes>
                    <Route path={"/"} element={<Home/>}/>
                    <Route path={"/welcome"} element={<RequireAuth><Welcome/></RequireAuth>}/>
                    <Route path={"/auth"} element={<Auth/>}/>
                </Routes>

        </>
    );
};

export default App;
