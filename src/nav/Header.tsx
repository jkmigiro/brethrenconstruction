import React, {useState} from 'react';
import type {MenuProps} from 'antd';
import {Layout, Menu, notification, Space, Typography} from 'antd';
import {Link} from "react-router-dom";
import {PhoneOutlined,PhoneFilled} from "@ant-design/icons";
import axios from "axios";
import {NotificationPlacement} from "antd/es/notification/interface";

const { Header } = Layout;
const {Text} = Typography;

const items: MenuProps['items'] = [
    {
        label: (<Text><Link to={"/"}/>Home</Text>),
        key: 'home'
    },
    {
        label: (<Text color={"white"}><Link to={"about"}/>About</Text>),
        key: 'about',
        children:[
            {
                label:(<Link to={""}/>),
                type:"group"
            },
            {
                label:"Core Values",
                type:"group"
            }
        ]
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
    const [error, setError] = useState('');
    const [api, contextHolder] = notification.useNotification();
    const pdf: string = process.env.REACT_APP_PDF_URL as string;

    const openNotification = (placement: NotificationPlacement = 'bottom') => {
        api.info({
            message: `Your download will begin shortly.`,
            placement,
        });
    };

    async function getCompanyProfile() {
        let response: any;
        await axios.get(pdf, {responseType: "blob"})
            .then(r => response = r)
            .catch(reason => setError(reason.message))
            .finally(() => setError(''))

        if (response !== undefined) {
            const url = window.URL.createObjectURL(new Blob([response.data]))
            const link = document.createElement('a')
            link.href = url
            link.setAttribute('download', 'BRETHREN COMPANY PROFILE.pdf')
            document.body.appendChild(link)
            link.click()
        } else {
            setError('Error occurred')
        }


    }

    return (
    <Header style={{ display: 'flex', alignItems: 'start',backgroundColor:"white",justifyContent:"space-between" }}>
        {contextHolder}
        <div className="demo-logo" />
        <Menu
            //theme="dark"
            mode="horizontal"
            defaultSelectedKeys={['2']}
            items={[
                {
                    label: (<Text><Link to={"/"}/>Home</Text>),
                    key: 'home'
                },
                {
                    label: (<Text color={"white"}><Link to={"about"}/>About</Text>),
                    key: 'about',
                    children:[
                        {
                            label: (<Link to={"about"}>About Us</Link>),
                            type:"group"
                        },
                        {
                            label:(<Text style={{cursor: "pointer", color: "#1677ff"}}
                                         onClick={() => {
                                             openNotification();
                                             getCompanyProfile();
                                         }}>Company Profile</Text>),
                            type:"group"
                        },
                        {
                            label:(<Link to={"/core-values"}>Core Values</Link>),
                            type:"group"
                        }
                    ]
                },
                {
                    label: (<Text color={"white"}><Link to={"contact"}/>Contact Us</Text>),
                    key: 'contact'
                }
            ]}
            style={{ flex: 1, minWidth: 0 }}
        />
        <Menu
            mode="horizontal"
            selectable={false}
            items={items2}
            style={{ flex: 1, minWidth: 0, alignSelf:"end",justifyContent:"space-between"}}
        />
    </Header>
    )
};

export default Nav;