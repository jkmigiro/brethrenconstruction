import React, {useState} from "react";
import {Breadcrumb, Button, Col, Form, Input, Layout, Row, Space, Typography} from "antd";
import {HomeOutlined, MailOutlined, PhoneOutlined} from "@ant-design/icons";
import ErrorNotification from "../helpers/ErrorNotification";
import {sendEmail} from "../services/Service";
import MailInterface from "../interfaces/MailInterface";


const {Item} = Form;
const {Text, Title} = Typography
const {Content}= Layout;

interface ContactUsType{
    icon: React.ReactNode,
    content: string
}
const formItemLayout = {
    wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 },
    },
};

const ContactUs: React.FC = () => {
    const mqXs: number = 24;
    const [form] = Form.useForm();
    const [error,setError] = useState('');
    const onFinish = (values: any) => {
        console.log('Received values of form: ', values);
        const email : MailInterface = {
            from: values.email,
            to: 'info@brethrenconstructionltd.co.ke',
            subject: values.name,
            text: values.message
        }
        const url =process.env.REACT_APP_API_URL;
        console.log('URL is: ',process.env.REACT_APP_API_URL);
        console.log('Email: ',email)

        sendEmail(email)
            .then(r => console.log('Successful Response: ',r))
            .catch(reason => setError(error));



    };
    return (
        <div>
            <Layout>
                <Content>
                    <Row
                        align={"middle"}
                        justify={"center"}
                        gutter={[16, 16]}
                        style={{padding:"30px"}}
                    >
                        <Col xs={mqXs} sm={8} md={8} lg={8} xl={8}>
                            <Breadcrumb
                                style={{marginBottom:"20px"}}
                                items={[
                                    {
                                        title: 'Home',
                                    },
                                    {
                                        title: (<Text style={{fontWeight: "bolder"}}>Contact Us</Text>),
                                    },
                                ]}
                            />
                            <Title level={3} style={{margin:"0"}}>Contact Us</Title>
                            <Row>
                                <Col>
                                    {
                                        contactUsElements.map((item,i) => (
                                            <Row key={i} style={{padding:"10px"}}
                                                 align={"middle"} justify={"center"}>
                                                <Col span={24} style={{alignItems:"center",justifyContent:"center"}}>
                                                    <Space align={"center"} size={"large"}>
                                                        {item.icon}
                                                        {item.content}
                                                    </Space>
                                                </Col>
                                            </Row>
                                        ))
                                    }
                                </Col>
                            </Row>


                        </Col>
                        <Col xs={24} sm={8} md={16} lg={16} xl={16}>
                            <Row
                                align={"middle"}
                                justify={"center"}
                            >
                                <Form
                                    form={form}
                                    {...formItemLayout}
                                    name="contactUs"
                                    onFinish={onFinish}
                                    style={{ maxWidth: 600,width:"100%"}}
                                    scrollToFirstError
                                >
                                    <Item
                                        name="name"
                                        rules={[
                                            {
                                                min:3,
                                                message:"Should be at least 3 characters"
                                            },
                                            {
                                                required: true,
                                                message: 'Please input your name',
                                            },
                                        ]}
                                    >
                                        <Input placeholder={"Your name"}/>
                                    </Item>
                                    <Item
                                        name="email"
                                        rules={[
                                            {
                                                type: 'email',
                                                message: 'The input is not valid E-mail!',
                                            },
                                            {
                                                required: true,
                                                message: 'Please input your E-mail!',
                                            },
                                        ]}
                                    >
                                        <Input placeholder={"Your Email"}/>
                                    </Item>
                                    <Item
                                        name="message"
                                        rules={[{ required: true, message: 'Please input message' }]}
                                    >
                                        <Input.TextArea showCount maxLength={100} placeholder={"Your Message"}/>
                                    </Item>
                                    <Item >
                                        <Button type="primary" htmlType="submit">
                                            Submit
                                        </Button>
                                    </Item>
                                </Form>
                            </Row>

                        </Col>
                    </Row>
                </Content>
                {
                    error && (
                        <ErrorNotification error={error}/>
                    )
                }
            </Layout>
        </div>
    )
};

const contactUsElements: ContactUsType[] = [
    {
        icon:(<HomeOutlined/>),
        content:"P.O. BOX 84197 - 80100, Mombasa, Kenya"
    },
    {
        icon:(<PhoneOutlined/>),
        content:"+25437441260 / +254702040346"
    },
    {
        icon:(<MailOutlined/>),
        content:"info@brethrenconstruction.co.ke"
    }
]


export default ContactUs;