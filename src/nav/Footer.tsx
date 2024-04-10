import React from 'react';
import {Col, Layout, MenuProps, Row, Space, Typography} from "antd";

import {ResponsiveContext} from "grommet";
import {useContext} from "react";
import {HomeOutlined, MailOutlined, PhoneOutlined} from "@ant-design/icons";
import {Link} from "react-router-dom";

const {Footer} = Layout;
const {Text, Title, Paragraph} = Typography
const color: string = '#ecc719'
const Foot: React.FC = () => {
    const size = useContext(ResponsiveContext);
    return (
        <Footer color={"black"}
                style={{
                    backgroundColor: `${color}`,
                    fontWeight: "bold"
                }}>
            {/*<Row gutter={[16, 16]}*/}
            {/*     style={{*/}
            {/*         marginBottom: "20px"*/}
            {/*     }}*/}
            {/*>*/}
            {/*    <Col xs={24} sm={8} md={8} lg={8} xl={8}>*/}
            {/*        <Row gutter={[16, 16]}>*/}
            {/*            <Col span={24}>*/}
            {/*                <Text>Logo</Text>*/}
            {/*            </Col>*/}
            {/*            <Col span={24}>*/}
            {/*                <Text>Brethren Construction Limited ©{new Date().getFullYear()}</Text>*/}
            {/*            </Col>*/}
            {/*            <Col span={24}>*/}
            {/*                <Text>All Rights Reserved</Text>*/}
            {/*            </Col>*/}
            {/*            <Col span={24}>*/}
            {/*                <Text>Social Media Icons</Text>*/}
            {/*            </Col>*/}
            {/*        </Row>*/}

            {/*    </Col>*/}
            {/*    <Col xs={24} sm={8} md={8} lg={8} xl={8}>*/}
            {/*        <Row gutter={[16, 16]}>*/}
            {/*            <Col>*/}
            {/*                <Space>*/}
            {/*                    <HomeOutlined/>*/}
            {/*                    <Text>P.O. BOX 84197 - 80100,*/}
            {/*                        MOMBASA, KENYA</Text>*/}
            {/*                </Space>*/}
            {/*            </Col>*/}
            {/*            <Col>*/}
            {/*                <Space>*/}
            {/*                    <PhoneOutlined/>*/}
            {/*                    <Text>+25437441260/0724571153</Text>*/}
            {/*                </Space>*/}
            {/*            </Col>*/}
            {/*            <Col>*/}
            {/*                <Space>*/}
            {/*                    <MailOutlined/>*/}
            {/*                    <Text>info@brethrenconstruction.co.ke</Text>*/}
            {/*                </Space>*/}
            {/*            </Col>*/}
            {/*        </Row>*/}


            {/*    </Col>*/}
            {/*    <Col xs={24} sm={8} md={8} lg={8} xl={8}>*/}
            {/*        <Row gutter={[16, 16]}>*/}
            {/*            {*/}
            {/*                links.map((item,i) => (*/}
            {/*                   <Col key={i} span={24}> <Link to={item.link}>{item.text}</Link></Col>*/}
            {/*                ))*/}
            {/*            }*/}
            {/*        </Row>*/}

            {/*    </Col>*/}
            {/*</Row>*/}
            <Row align={"middle"} justify={"center"}>
                <Text style={{
                    fontFamily: "monospace",
                    color: "#636363"
                }}>Brethren Construction Limited ©{new Date().getFullYear()}</Text>
            </Row>
        </Footer>

    );
};

const links= [
    {
        link: "/",
        text:"Home"
    },
    {
        link: "about",
        text:"About Us"
    },
    {
        link: "contact",
        text:"Contact"
    },
    {
        link: "projects",
        text:"Projects"
    }
];

export default Foot;