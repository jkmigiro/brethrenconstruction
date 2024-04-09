import React from "react";
import {Button, Col, Row, Typography} from "antd";
import {Link} from "react-router-dom";
const {Text,Title} = Typography




const ConsultationBand = () => {
    return (
        <Row style={{height:'100px',
            backgroundColor:"#ecc719",
            width:"100%"
        }}
             align={"middle"}
             justify={"center"}
        >
            <Col>
                <Title level={4}>Would like a free consultation? <span><Link to="mailto:recipient@example.com">Email Us</Link></span></Title>

            </Col>
        </Row>
    )
};

export default ConsultationBand;