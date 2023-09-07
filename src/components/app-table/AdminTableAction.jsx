import React from 'react';
import { Dropdown } from 'antd';
import { MoreOutlined } from '@ant-design/icons';

const AdminTableAction = (props) => {
    const { items } = props;

    return (
        <Dropdown
            menu={{
                items,
            }}
            trigger={['click']}
        >
            <MoreOutlined />
        </Dropdown>
    );
};

export default AdminTableAction;
