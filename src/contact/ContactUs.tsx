import React, {useState} from "react";
import {Breadcrumb, Button, Col, Form, Input, Layout, notification, Row, Space, Typography} from "antd";
import {HomeOutlined, MailOutlined, PhoneOutlined} from "@ant-design/icons";
import MailInterface from "../interfaces/MailInterface";
import axios from "axios";
import {NotificationPlacement} from "antd/es/notification/interface";
import {Link} from "react-router-dom";


const {Item} = Form;
const {Text, Title} = Typography
const {Content}= Layout;

interface ContactUsType{
    icon: React.ReactNode,
    content: string | React.ReactNode,
    element?:React.ReactNode,
    content2?:string
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
    const [api, contextHolder] = notification.useNotification();


    const openNotification = (placement: NotificationPlacement = 'bottom') => {
        api.info({
            message: `Successfully sent.`,
            placement,
        });
    };
    const [error,setError] = useState('');
    const onFinish = (values: any) => {
        const mail : MailInterface = {
            from: values.email,
            to: 'info@brethrenconstructionltd.co.ke',
            subject: values.name,
            text: values.message
        }

        const url: string = process.env.REACT_APP_MAIL_URL as string;
        axios.post(url, mail)
            .then(r => {
                openNotification()
            })
            .catch(reason => {
                setError(reason.response.data);
            });
        form.isFieldTouched("email");


    };

    return (
            <Layout>
                {contextHolder}
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
                                                        {item.element}
                                                    </Space>
                                                    <Space align={"center"} size={"large"}>
                                                        {
                                                            i === 0 && (
                                                                <HomeOutlined style={{color:"#f5f5f5"}}/>
                                                            )
                                                        }
                                                        {item.content2}
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
                                        rules={[
                                            { required: true, message: 'Please input message' },
                                            {
                                                min:3,
                                                message:"Message too short. 3 or more characters."
                                            },
                                        ]}
                                    >
                                        <Input.TextArea showCount maxLength={500} placeholder={"Your Message"}/>
                                    </Item>
                                    <Item >
                                        <Button type="primary" htmlType="submit" >
                                            Submit
                                        </Button>
                                    </Item>
                                </Form>
                            </Row>

                        </Col>
                    </Row>
                </Content>
                <div style={{marginBottom:"120px"}}>

                </div>
            </Layout>
    )
};




const contactUsElements: ContactUsType[] = [
    {
        icon:(<HomeOutlined/>),
        content:` P.O. BOX 50020 - 00100, Nairobi, Kenya. `,
        content2:"Kitengela, Along Namanga Road.",
        element:(<br/>)
    },
    {
        icon:(<PhoneOutlined/>),
        content:(
            <Space>
                <Link to={"tel:+25437441260"} style={{color:"black"}}>+25437441260</Link>
                <div>/</div>
                <Link to={"tel:+254702040346"} style={{color:"black"}}>+254702040346</Link>
        </Space>)
    },
    {
        icon:(<MailOutlined/>),
        content:(<Link to={"mailto:info@brethrenconstruction.co.ke"}>info@brethrenconstruction.co.ke</Link>)
    }
];

//"+25437441260 / +254702040346


export default ContactUs;