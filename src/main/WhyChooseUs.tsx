import React from 'react';
import {Col, Image, Row, Typography} from 'antd';
import TitleDescTextComponent from "./TitleDescTextComponent";
import logo from '../img104.png';

const {Title, Paragraph} = Typography;

const WhyChooseUs: React.FC = () => {
    return (
        <Row align={"middle"} justify={"start"} className={"marginTopBottom"}>
            <Col xs={24} sm={12} md={12} xl={12} xxl={12}>
                <Row align={"middle"} justify={"center"}>
                    <Image
                        width={"400px"}
                        src={process.env.PUBLIC_URL + '/img104.png'}
                    />
                </Row>
            </Col>
            <Col xs={24} sm={12} md={12} xl={12} xxl={12}>
                <TitleDescTextComponent
                    props={{
                        title: 'BENEFITS',
                        titleDesc: 'Why You Choose Us',
                        text:
                            `
                            Our exceptional service is a product of our collaboration, expertise, responsibility, and inventiveness, all of which are evident in the caliber of our output.
                             We foster an atmosphere that promotes and sustains lifelong development.
                              We consistently optimize our cost structure and procedures to give our customers the best value.
                      `,
                        align: 'top',
                        justify: 'start'
                    }}
                />
            </Col>

        </Row>
    )
};

export default WhyChooseUs;