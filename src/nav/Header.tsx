import React, {useState} from 'react';
import type {MenuProps} from 'antd';
import {Layout, Menu, Space, Typography} from 'antd';
import {Link} from "react-router-dom";
import {PhoneOutlined,PhoneFilled} from "@ant-design/icons";

const { Header } = Layout;
const {Text} = Typography;

const items: MenuProps['items'] = [
    {
        label: (<Text><Link to={"/"}/>Home</Text>),
        key: 'home'
    },
    {
        label: (<Text color={"white"}><Link to={"about"}/>About</Text>),
        key: 'about'
    },
    {
        label: (<Text color={"white"}><Link to={"contact"}/>Contact Us</Text>),
        key: 'contact'
    }
];
//style={{backgroundColor:"white"}}
const items2: MenuProps['items'] = [
    {
        label: (<div></div>),
        key: 'home'
    },
    {
        label: (<div></div>),
        key: 'about'
    },
    {
        label: (<Space><PhoneFilled style={{ fontSize: '24px', color: '#ecc719' }} /><Text>+25437441260 / +254702040346</Text></Space>),
        key: 'contact'
    }
];

const Nav: React.FC = () => {
    const [current, setCurrent] = useState('mail');

    const onClick: MenuProps['onClick'] = (e) => {
        setCurrent(e.key);
    };

    return <Header style={{ display: 'flex', alignItems: 'start',backgroundColor:"white",justifyContent:"space-between" }}>
        <div className="demo-logo" />
        <Menu
            //theme="dark"
            mode="horizontal"
            defaultSelectedKeys={['2']}
            items={items}
            style={{ flex: 1, minWidth: 0 }}
        />
        <Menu
            mode="horizontal"
            defaultSelectedKeys={['2']}
            items={items2}
            style={{ flex: 1, minWidth: 0, alignSelf:"end",justifyContent:"space-between"}}
        />
    </Header>
};

export default Nav;