import React from "react";
import {Divider, Layout, theme, Typography,List} from "antd";
import ConsultationBand from "./main/ConsultationBand";
import WhatWeOffer from "./main/WhatWeOffer";
import TitleDescTextComponent from "./main/TitleDescTextComponent";
import WhyChooseUs from "./main/WhyChooseUs";
import Projects from "./projects/projects";
import {ServicesDataInterface} from "./Props";
import TitleListComponent from "./main/TitleListComponent";


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
                    <TitleListComponent
                        props={{
                            title:'SERVICES',
                            titleDesc:'What We Offer',
                            data:services,
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

const services =[
    {
        title:"Refurbishments",
        description: `
                    We handcraft our work to meet your
                    expectations, working with you to plan, design
                    and execute your renovation as you imagined it.
                    Our refurbishment expertise includes
                    residences, hotels, commercial offices,
                    warehouses and other establishments.
                    `

    },
    {
        title:"Design & Build, from Initial Sketches",
        description:`
                    We offer turnkey project delivery by bringing the
                    planning, design, project management, cost
                    management and construction of the project
                    together, under one roof.
                    Clients benefit from value-engineering and preconstruction reviews, accelerated
                    delivery, increased quality control, lower design
                    and consultation fees, reduced
                    owner risk and administrative responsibilities.
        `
    },
    {
        title: "Modern Interiors and Fit-Outs",
        description: `
                    Being a versatile company, Brethren
                    construction Ltd has vast experience in the
                    construction, extensions and refurbishments of
                    factories, warehouses and other industrial
                    establishments.
        `
    },
    {
        title: " Industrial and Civil",
        description: `
                    We have carried out interior fit-out work with
                    renowned designers, architects and clients,
                    combining functionality, economy and
                    aesthetics.
                    We ensure that your ideas and designs are
                    implemented into your space, with our
                    capabilities and experience enabling both small
                    and large scale fit-out projects to be carried out
                    successfully.
        `
    }
]

export default Main;