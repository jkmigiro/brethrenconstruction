import React from 'react';
import {
    BorderBottomOutlined,
    BorderTopOutlined
} from '@ant-design/icons';
import { Button, Divider, notification, Space } from 'antd';
import type { NotificationArgsProps } from 'antd';

type NotificationPlacement = NotificationArgsProps['placement'];
interface ErrorInterface {
    error: string;
}

const App: React.FC<ErrorInterface> = ({error}) => {
    const [api, contextHolder] = notification.useNotification();

    const openNotification = (placement: NotificationPlacement) => {
        api.info({
            message: `Error Occurred`,
            description:error,
            placement,
        });
    };

    return (
        <>
            {contextHolder}
            <Space>
                <Button type="primary" onClick={() => openNotification('top')} icon={<BorderTopOutlined />}>
                    top
                </Button>
            </Space>

        </>
    );
};

export default App;