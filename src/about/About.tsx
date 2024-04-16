import React from "react";
import {Breadcrumb, Col, Layout, Row, Space, Typography} from "antd";

const {Content} = Layout;
const {Text, Title, Paragraph} = Typography;

//#ecc719
const color: string = 'black';

interface AboutUsType {
    title: string,
    content: string
}

const About: React.FC = () => {
    const mqXs: number = 24;
    const mqOthers: number = 21;





    return (
        <div>
            <Layout>
                <Content>
                    <Row style={{padding: "30px"}}>
                        <Col xs={mqXs} sm={mqOthers} md={mqOthers} lg={mqOthers} xl={mqOthers}>
                            <Space>
                                <Breadcrumb
                                    items={[
                                        {
                                            title: 'Home',
                                        },
                                        {
                                            title: (<Text style={{fontWeight: "bolder"}}>About Us</Text>),
                                        },
                                    ]}
                                />

                            </Space>
                        </Col>
                        {
                            aboutUs.map((item, i) => (
                                <Col key={i} xs={mqXs} sm={mqOthers} md={mqOthers} lg={mqOthers} xl={mqOthers}>
                                    <Title level={3}
                                           style={{color: `${color}`, fontWeight: "bolder"}}>{item.title}</Title>
                                    <Paragraph>
                                        {item.content}
                                    </Paragraph>
                                </Col>
                            ))
                        }
                    </Row>
                </Content>
            </Layout>
        </div>
    )
};

const aboutUs: AboutUsType[] = [
    {
        title: "About Us",
        content: `
                Brethren construction Limited is a General Building Construction Company, based in Nairobi, Kenya.
                We operate an integrated business model, offering our clients Professional Building
                Construction Services, Design & Build Services and Efficient project management.
                Brethren construction Ltd provides excellence in a wide range of commercial, residential, industrial/
                civil, refurbishment and fit-out projects across Kenya.
                At Brethren, we engage our planning and management skills to deliver the highest
                standards in construction, embracing new technology and striving to bring innovative and
                unique ideas on all our projects.
        `
    },
    {
        title: "Safety",
        content: `
                For Brethren Construction Limited, Safety constitutes a fundamental aspect of
                our
                operations.
                We uphold stringent health & safety protocols to guarantee that our workforce
                adheres to the
                necessary guidelines. Providing personal protective equipment is vital to
                safeguarding the
                well-being of our employees and minimizing the risk of occupational injuries and
                illnesses.
        `
    },
    {
        title: "Environment",
        content: `
                At Brethren Construction Limited, we are dedicated to upholding the utmost standards
                in
                minimizing our environmental footprint. We are steadfast in our pursuit of enhancing
                environmental performance by adopting responsible procurement methods and
                operational
                practices. Our ethos revolves around reducing and managing waste, curbing pollution,
                safeguarding natural habitats, and preserving precious natural resources.
        `
    },
    {
        title: "Social Responsibilities",
        content: `
                Drawing from our extensive experience in the construction industry, Brethren
                Construction
                Limited has been actively involved in extending support to various institutions
                serving the
                underprivileged. Leveraging our access to a variety of materials and
                materials sourced from affiliated suppliers, we have undertaken numerous projects to
                construct essential facilities.
        `
    },
    {
        title: "Our Mission",
        content: `
                 We are fully dedicated to providing
                quality construction and building
                services to our clients. We strive
                to implement and maintain
                long-term relationships based on
                quality assurance, service delivery
                and safety.
        `
    },
    {
        title: "Our Vision",
        content: `
              A regional market leader in provision of
              civil engineering and building
              construction services.
        `
    }
]


export default About;