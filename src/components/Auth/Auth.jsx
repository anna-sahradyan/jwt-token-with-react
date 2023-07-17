import React, {useContext, useState} from 'react';
import {Container} from "./authStyle";
import {Button, Card, Form, Input} from "antd";
import axios from "axios";
import qs from 'qs';
import {useLocation, useNavigate} from "react-router";
import {AuthContext} from "../hoc/AuthProvider";



const Auth = () => {
    const [isSignup, setIsSignup] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();
    const fromPage = location.state?.from?.pathname || "/";
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const {setAuth} = useContext(AuthContext);
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);

    };
    const switchMode = () => {
        setIsSignup((prev) => !prev);
    }
    const handleSubmit = async (values) => {

        if (isSignup) {
            const newUsers = {
                name: values.name,
                password: values.password,
                email: values.email,
            };
            const formData = qs.stringify(newUsers);
            axios
                .post(`http://localhost:8080/register`, formData, {
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded',
                    },
                })
                .then(({data}) => {
                    setAuth({
                        token: data.accessToken,
                        ...data.user
                    })

                    localStorage.setItem('user', JSON.stringify({
                        token: data.accessToken,
                        ...data.user
                    }))
                    console.log(data.user)
                    navigate("/");
                })
                .catch((err) => console.log(err.message));
        } else {
            const oldUsers = {
                name: values.name,
                password: values.password,
            };
            const formData = qs.stringify(oldUsers);
            axios
                .post(`http://localhost:8080/login`, formData, {
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded',
                    },
                })
                .then(({data}) => {
                    setAuth({
                        token: data.accessToken,
                        ...data.user
                    })
                    console.log(data)
                })
                .catch((err) => console.log(err.message));
        }

    };

    return (
        <>
            <Container>
                <Card
                    size="small"
                    style={{
                        width: 400,
                        border: "2px solid grey",
                        boxShadow: "4px 4px 24px 2px rgba(0,0,0,0.53)",
                        margin: " auto ",
                        marginTop: "100px"
                    }}>
                    <Form
                        name="basic"
                        labelCol={{
                            span: 8,
                        }}
                        wrapperCol={{
                            span: 16,
                        }}
                        initialValues={{
                            remember: true,
                        }}
                        onFinish={handleSubmit}
                        onFinishFailed={onFinishFailed}
                        autoComplete="off"
                    >
                        {isSignup && (
                            <>
                                <Form.Item
                                    label="Email"
                                    name="email"
                                    value={email}
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Please input your email!',
                                        },
                                    ]}
                                >
                                    <Input onChange={(e) => setEmail(e.target.value)}/>
                                </Form.Item>
                            </>
                        )}
                        <Form.Item
                            label="Username"
                            name="name"
                            value={name}
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your name!',
                                },
                            ]}
                        >
                            <Input onChange={(e) => setName(e.target.value)}/>
                        </Form.Item>

                        <Form.Item
                            label="Password"
                            name="password"
                            value={password}
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your password!',
                                },
                            ]}
                        >
                            <Input.Password onChange={(e) => setPassword(e.target.value)}/>

                        </Form.Item>
                        <Form.Item
                            wrapperCol={{
                                offset: 8,
                                span: 16,
                            }}
                        >
                            <Button type="primary" htmlType="submit">
                                {isSignup ? "Sign Up" : "Sign In"}
                            </Button>
                        </Form.Item>

                        <Form.Item
                            wrapperCol={{
                                offset: 8,
                                span: 16,
                            }}
                        >
                            <Button type="primary" htmlType="submit" onClick={switchMode}>
                                {isSignup ? "Already have an account ? Sign In " : "Don't have an account ? Sign Up"}
                            </Button>
                        </Form.Item>
                    </Form>
                </Card>

            </Container>
        </>
    );
};

export default Auth;
