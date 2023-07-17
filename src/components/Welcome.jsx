import React from 'react';
import {Link} from "react-router-dom";
import {MenuItem} from "../styleedComponents/headerStyle";




const Welcome= () => {
    return (
        <>

           <Link to={"/welcome"} style={{color:"white",fontSize:"22px"}} ><MenuItem>Welcome</MenuItem></Link>

        </>
    );
};

export default Welcome;
