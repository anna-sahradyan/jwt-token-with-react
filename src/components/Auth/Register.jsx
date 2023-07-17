import React, {useState} from 'react';
import {Container, ContainerReg} from "./authStyle";
import {Button, Card, Form, Input} from "antd";


const Register = () => {
    const [isSignup, setIsSignup] = useState(false);
    const API_BASE_URL = 'https://api.instantwebtools.net/v1';
    const [signUpData, setSignUpData] = useState({
        signUpName: '',
        signUpEmail: '',
        signUpPassword: '',
    });
    const {signUpName, signUpEmail, signUpPassword} = signUpData;

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);

    };
    const handleSubmit = async () => {




    };



    const switchMode = () => {

    }
    return (
        <>
            <ContainerReg>
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


                            <Form.Item
                                label="Email"
                                name="signUpEmail"
                                value={signUpEmail}
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input your username!',
                                    },
                                ]}
                            >
                                <Input onChange={(e) => setSignUpData({ ...signUpData, signUpEmail: e.target.value })}/>
                            </Form.Item>


                            <Form.Item
                                label="Username"
                                name="signUpName"
                                value={signUpName}
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input your username!',
                                    },
                                ]}
                            >
                                <Input onChange={(e) => setSignUpData({ ...signUpData, signUpName: e.target.value })}/>
                            </Form.Item>

                            <Form.Item
                                label="Password"
                                name="signUpPassword"
                                value={signUpPassword}
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input your password!',
                                    },
                                ]}
                            >
                                <Input.Password onChange={(e) => setSignUpData({ ...signUpData, signUpPassword: e.target.value })} />
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

            </ContainerReg>
        </>
    );
};

export default Register;
