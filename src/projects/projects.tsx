import React from 'react';
import {TitleDescTextProps} from "../Props";
import {Col, Image, Layout, Row, Typography} from "antd";
const {Content}=Layout;
const {Title}=Typography;
interface ProjectI {
    title:string;
    img: string;
}
const Project:React.FC<ProjectI> = ({ title, img }) => (
    <Col>
        <Image width={"500px"} src={process.env.PUBLIC_URL + img} alt={title} className="project-img" />
    </Col>
);

const Projects = () => {
    const projects = [
        {
            title: 'Project 1',
            img: '1712555505734.jpg',
        },
        {
            title: 'Project 2',
            img: '1712555505806.jpg',
        },
    ];

    return (
        <Content style={{marginBottom:"20px"}}>
            <Title style={{textAlign:"center",marginTop:"5px"}}>Our Previous Projects</Title>
            <Row align={"middle"}
                 justify={"center"}
                 gutter={[16, 16]}
            >
                {projects.map((project, index) => (
                    <Project key={index} {...project} />
                ))}
            </Row>
        </Content>
    );
};

export default Projects;