import React, {useEffect} from 'react';
import {BorderTopOutlined} from '@ant-design/icons';
import type {NotificationArgsProps} from 'antd';
import {Button, notification, Space} from 'antd';

type NotificationPlacement = NotificationArgsProps['placement'];

interface ErrorInterface {
    error: string;
}

const ErrorNotification: React.FC<ErrorInterface> = ({error}) => {
    const [api, contextHolder] = notification.useNotification();
    let buttonRef = React.createRef<HTMLElement>();

    const openNotification = (placement: NotificationPlacement = 'bottom') => {
        api.info({
            message: `Error Occurred`,
            description: error,
            placement,
        });
    };
    useEffect(() => {
        if (buttonRef.current) {
            buttonRef.current.click();
        }
    }, [buttonRef]);

    return (
        <>
            {contextHolder}
            <Space>
                <Button type="primary"
                        onClick={() => openNotification()}
                        ref={buttonRef}
                        style={{visibility: 'hidden', position: 'absolute'}}
                        icon={<BorderTopOutlined/>}>
                    top
                </Button>
            </Space>

        </>
    );
};

export default ErrorNotification;