import {Col, Row, Typography,Layout} from "antd";
import React from "react";
import {TitleDescTextProps} from "../Props";

const {Text, Title, Paragraph} = Typography;
const {Content} = Layout;



const TitleDescTextComponent: React.FC<TitleDescTextProps> = ({props}) => {
    let paragraphClass: string = '';
    switch (props.justify) {
        case "center":
            paragraphClass = 'centerFlex'
            break;
        case "start":
            paragraphClass = 'startFlex'
            break;
        default:
            paragraphClass = 'centerFlex'
    }
    return (
        <Row align={props.align} justify={props.justify} gutter={[16, 16]}>
            <Col>
                <Row align={props.align} justify={props.justify}>
                    <Col xs={24} sm={12} md={12} xl={12} xxl={12}>
                        <Title level={5} color={"#636363"} style={{letterSpacing: "6px"}}>{props.title}</Title>
                    </Col>
                </Row>
                <Row align={props.align} justify={props.justify}>
                  <Col xs={24} sm={12} md={12} xl={12} xxl={12}>
                      <Typography>
                          <Title level={1} style={{fontWeight: "bolder"}}><strong>{props.titleDesc}</strong></Title>
                      </Typography>
                  </Col>
                </Row>
                <Row align={props.align} justify={props.justify}>
                   <Col className={paragraphClass} xs={24} sm={12} md={12} xl={12} xxl={12}>
                       <Paragraph strong={true} >
                           {
                               props.text
                           }
                       </Paragraph>
                   </Col>
                </Row>
            </Col>
        </Row>
    )
};

export default TitleDescTextComponent;