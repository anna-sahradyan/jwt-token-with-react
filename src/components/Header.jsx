import React, {useContext} from 'react';
import {Center, Container, Language, Left, Logo, MenuItem, Right, Wrapper} from "../styleedComponents/headerStyle";
import Welcome from "./Welcome";
import {Link} from "react-router-dom";
import {Badge} from "antd";
import {AuthContext} from "./hoc/AuthProvider";
import {useNavigate} from "react-router";


const Header = () => {
    const {auth, setAuth} = useContext(AuthContext);
    const navigate = useNavigate();
    const logOutUser = () => {
        setAuth(null)
        localStorage.removeItem("user");
        navigate("/auth")
    }
    return (
        <>
            <Container>
                <Wrapper>
                    <Left><Language>En</Language>
                    </Left>

                    <Center>
                        <Link to={"/"} style={{color: "white"}}><Logo> Home</Logo></Link>
                    </Center>
                    <Right>
                        {auth?.name.length ? <span style={{color: "white"}} onClick={logOutUser}><MenuItem>
                            Sign Out
                        </MenuItem></span> : <MenuItem>
                            <Welcome/>
                        </MenuItem>}

                        <MenuItem>
                            <Badge>
                            </Badge>
                        </MenuItem>
                    </Right>

                </Wrapper>
            </Container>

        </>
    );
};

export default Header;
