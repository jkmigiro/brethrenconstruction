import React from "react";
import {Breadcrumb, Col, Divider, Layout, Row, Space, theme, Typography} from "antd";
import Icon, {HomeOutlined, PhoneOutlined, MailOutlined} from '@ant-design/icons';
import {Link} from "react-router-dom";

const {Header, Content, Sider} = Layout;
const {Text, Title, Paragraph} = Typography;

//#ecc719
const color: string = 'black';

interface AboutUsType {
    title: string,
    content: string
}

const About: React.FC = () => {
    const {
        token: {colorBgContainer, borderRadiusLG},
    } = theme.useToken();
    const mqXs: number = 24;
    const mqOthers: number = 21;
    return (
        <div>
            <Layout>
                    <Content>
                        <Row  style={{padding:"30px"}}>
                            <Col xs={mqXs} sm={mqOthers} md={mqOthers} lg={mqOthers} xl={mqOthers}>
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
                            </Col>
                            {
                                aboutUs.map((item,i) => (
                                    <Col key={i} xs={mqXs} sm={mqOthers} md={mqOthers} lg={mqOthers} xl={mqOthers}>
                                        <Title level={3} style={{color: `${color}`,fontWeight:"bolder"}}>{item.title}</Title>
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
               Brethren Construction Limited is a General Building Construction firm situated in Mombasa,
               Kenya, which originated in 1984 under proprietorship management. Subsequently, the company
               underwent
               re-registration in 1999 as Brethren Construction Limited, a limited liability company.
        
               With over 35 years of expertise in the building and civil industry, we have earned
               recognition for
               successfully completing numerous projects and serving esteemed clientele. Our commitment to
               Integrity, Quality, and Safety remains unwavering as we continue to specialize in various
               construction endeavors.
        
               Employing an integrated business approach, we provide our clients with Professional Building
               Construction Services, Design and Build Solutions, and Effective Project Management.
               Brethren
               Construction Limited excels in a broad spectrum of projects including Commercial,
               Residential,
               Industrial/Civil, Refurbishment, and Fit-out across Kenya. 
        `
    },
    {
        title: "Safety",
        content: `
                For Brethren Construction Limited, Safety constitutes a fundamental aspect of
                our
                operations.
                We uphold stringent Health & Safety protocols to guarantee that our workforce
                adheres to the
                necessary guidelines. Providing personal protective equipment is vital to
                safeguarding the
                well-being of our employees and minimizing the risk of occupational injuries and
                illnesses.
        `
    },
    {
        title:"Environment",
        content:`
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
        title:"Social Responsibilities",
        content:`
                Drawing from our extensive experience in the construction industry, Brethren
                Construction
                Limited has been actively involved in extending support to various institutions
                serving the
                underprivileged. Leveraging our access to demolition salvage materials and
                second-grade
                materials sourced from affiliated suppliers, we have undertaken numerous projects to
                construct essential facilities. These endeavors encompass schools, clinics,
                orphanages, and
                more, often in collaboration with potential donor groups.
        `
    },
    {
        title:"Our Mission",
        content:`
                At Brethren Construction Limited, our primary commitment is to deliver top-notch
                construction and technical services to our clients. We are deeply invested in
                fostering
                enduring relationships with our clientele, built on pillars of safety, quality, and
                service
                excellence.
        `
    },
    {
        title:"Our Vision",
        content:`
                As a family-owned enterprise, Brethren Construction Limited is steadfastly dedicated
                to
                becoming the preferred contractor, striving for excellence through unwavering
                commitment,
                extensive experience, and disciplined personnel. Our aim is to cultivate a company
                that
                clients eagerly choose to collaborate with, and where our employees take pride in
                their
                association. We are poised to seize new opportunities and are passionately driven to
                deliver
                outstanding value at every turn.
        `
    }
]


export default About;