import React from "react";
import {Divider, Layout, theme, Typography} from "antd";
import ConsultationBand from "./main/ConsultationBand";
import WhatWeOffer from "./main/WhatWeOffer";
import TitleDescTextComponent from "./main/TitleDescTextComponent";
import WhyChooseUs from "./main/WhyChooseUs";
import Projects from "./projects/projects";


const { Text, Link,Title } = Typography;
const {Content} = Layout;


const Main: React.FC = () => {
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();
    return (
        <Layout>
            <Content style={{padding:"20px"}}>
                <div>
                    <div style={{textAlign:"center",marginTop:"5px"}}>
                        <Divider> <Text strong>WELCOME TO<br/></Text></Divider>
                        <Title level={1} style={{margin:"0"}}>Brethren Construction</Title>
                    </div>
                    <p>
                        Brethren construction Ltd is a General Building Construction Company, based in Nairobi, Kenya.
                        We operate an integrated business model, offering our clients Professional Building
                        Construction Services, Design & Build Services and Efficient project management.
                        Brethren construction Ltd provides excellence in a wide range of commercial, residential, industrial/
                        civil, refurbishment and fit-out projects across Kenya.
                        At Brethren, we engage our planning and management skills to deliver the highest
                        standards in construction, embracing new technology and striving to bring innovative and
                        unique ideas on all our projects.
                    </p>
                    <ConsultationBand/>
                    <TitleDescTextComponent
                        props={{
                            title:'SERVICES',
                            titleDesc:'What We Offer',
                            text:
                                `
                           Expert construction services for residential and commercial projects. Skilled professionals,
                           quality craftsmanship, on-time delivery. From renovations to new builds, we ensure excellence in
                           every aspect of your construction journey.
                        `,
                            align: 'middle',
                            justify:'center'

                        }}
                    />
                    <WhatWeOffer
                        props={{
                            rowNumber:4,
                            isExpandable:true
                        }}
                    />
                    <WhyChooseUs/>
                    <Projects/>
                </div>
            </Content>
        </Layout>
    )
};

export default Main;