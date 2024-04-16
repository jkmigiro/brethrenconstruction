import {Col, Row, Typography,Layout,List} from "antd";
import React from "react";
import {TitleDescTextProps, TitleListProps} from "../Props";

const {Text, Title, Paragraph} = Typography;
const {Content} = Layout;



const TitleListComponent: React.FC<TitleListProps> = ({props}) => {
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
        <List
            style={{marginTop:"20px",marginBottom:"20px"}}
            size="small"
            header={ <Title level={5} color={"#636363"} style={{letterSpacing: "6px"}}>{props.title}</Title>}
            bordered
            dataSource={props.data}
            renderItem={(item) => <List.Item>{
                <List.Item.Meta
                    title={<Title level={5} >{item.title}</Title>}
                    description={item.description}
                />
            }</List.Item>}
        />
    )
};

export default TitleListComponent;