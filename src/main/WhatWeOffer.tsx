import React, {useContext, useState} from 'react';
import {Card, Col, Row, Typography} from 'antd';
import {ResponsiveContext} from "grommet";

const {Paragraph, Text} = Typography;
type ParagraphType = {
    rowNumber: number,
    isExpandable: boolean
};

interface ParagraphProps {
    props: ParagraphType,
}

const WhatWeOffer: React.FC<ParagraphProps> = ({props}) => {
    const size = useContext(ResponsiveContext);
    console.log("Size: ", size)

    return (
        <Row gutter={16} style={{paddingLeft: "30px", paddingRight: "30px"}}>
            {
                items.map((value, index) => {
                    return (
                        <Col xs={24} sm={8} md={8} lg={8} xl={8} key={index}>
                            <Card title={value.title} bordered={false} style={{marginBottom: "20px"}}>
                                <Para isExpandable={props.isExpandable}
                                      rowNumber={props.rowNumber}
                                      text={value.text}/>
                            </Card>
                        </Col>
                    )
                })
            }
        </Row>
    )
};

interface ParaProps {
    text: string;
    rowNumber: number;
    isExpandable: boolean;
}

const Para: React.FC<ParaProps> = ({text, rowNumber, isExpandable}) => {
    const [isExpanded, setIsExpanded] = useState(false);
    return (
        <Paragraph
            ellipsis={{
                rows: rowNumber,
                expandable: isExpandable,
                expanded:isExpanded,
                onExpand: (e,info) => setIsExpanded(info.expanded)
            }}
        >{
            text
        }
            {isExpanded && (<button style={{
                color: "#1677ff",
                border:"none",
                background: "none",
                cursor:"pointer"}} onClick={() => setIsExpanded(false)}>Show Less</button>)}
        </Paragraph>
    )
};

const items = [
    {
        title: "Experience and Quality",
        text: `
         We consider excellence to be essential to the effective completion of our extensive portfolio.
                        We use our managerial and planning abilities to provide the best construction standards. We
                        believe that we need to develop methods for carrying out all kinds of conventional and
                        contemporary construction projects. We promise to stay informed about and knowledgeable with the
                        newest building materials utilized in contemporary construction.
        `
    },
    {
        title: "Trade Specialisation",
        text: `
         To complete different kinds of artisan work, we have teams of trade experts on staff. This
                        offers us a great deal of freedom to organize the work autonomously and effectively. These
                        specialized artisan teams include carpenters for form work and roofing, joinery fitters, tilers,
                        renderers, and masons.
        `
    },
    {
        title: "House Renovation",
        text: `
         With our all-inclusive home remodeling services, you can upgrade your living area. Our
                        knowledgeable team specializes in turning old spaces into contemporary havens, from design to
                        execution. By means of rigorous attention to detail and superior craftsmanship, we transform
                        your renovation visions into tangible realities, augmenting aesthetic appeal and practicality
                        alike.
        `
    }

];

export default WhatWeOffer;

