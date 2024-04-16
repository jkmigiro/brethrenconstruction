import React from 'react';
import {Card, Col, Layout, Row, Space, Typography} from 'antd';
import {
    BulbOutlined,
    LineChartOutlined,
    SafetyOutlined,
    StarOutlined,
    TeamOutlined,
    TrophyOutlined
} from "@ant-design/icons"

const {Content} = Layout;
const {Text, Title, Paragraph} = Typography;
type CoreValueType = {
    icon: React.ReactNode;
    title: string;
    description: string;
}
const CoreValues: React.FC = () => {

    const size = "middle"
    return (
        <Layout  style={{padding: "24px"}}>
            <Content>
                <Title level={2}>Our Core Values</Title>
                <Row gutter={16}>
                    {
                        coreValuesItems.map((value, index) => {
                            return (
                                <Col xs={24} sm={8} md={8} lg={8} xl={8} key={index} style={{
                                    marginBottom: "20px"
                                }}>
                                    <Card
                                        title={
                                            <Space align={"center"} size={"middle"}>
                                                {value.icon}
                                                <Title style={{margin: 0, textTransform: "uppercase"}} level={5}>
                                                    {value.title}
                                                </Title>
                                            </Space>}
                                        // bordered={false}
                                        styles={
                                            {
                                                header: {backgroundColor: "#ecc719"},
                                                body: {marginBottom: "30px"}
                                            }
                                        }

                                    >
                                        {value.description}
                                    </Card>
                                </Col>
                            )
                        })
                    }
                </Row>
            </Content>
        </Layout>

    )
};

const coreValuesItems: CoreValueType[] = [
    {
        icon: <TeamOutlined style={{fontSize: "24px"}}/>,
        title: "Staff",
        description: `
        Our talented professionals and trained recruits from diverse backgrounds share our values
        or discipline, commitment and coordinated teamwork.
        `
    },
    {
        icon: <TrophyOutlined/>,
        title: "Quality",
        description: `
        We provide outstanding service through teamwork, experience, accountability and innovation
         - all of which is reflected in the quality of our projects.
        `
    },
    {
        icon: <LineChartOutlined/>,
        title: "Continuous Improvement",
        description: ` 
         We cultivate and environment that supports and encourages continuous learning and development
         and personal growth.
        `
    },
    {
        icon: <SafetyOutlined/>,
        title: "Safety",
        description: `
        We uphold a positive and proactive safety culture, to create a healthy work environment. We remain
        committed to protecting our colleagues and the public.
        `
    },
    {
        icon: <BulbOutlined/>,
        title: "Innovation",
        description: `
        We continuously seek new and enterprising ways, whether technology or process-based, to meet our clients'
        needs and exceed their expectations.
        `
    },
    {
        icon: <StarOutlined/>,
        title: "Environment & Sustainability",
        description: `
        We strive to protect the environment by upholding effective and efficient environmental and sustainable practices.
        `
    }
]
export default CoreValues;