import {Avatar, Badge, Button, List, Popover} from 'antd'
import {AlertOutlined} from '@ant-design/icons'
import {useState} from "react";

const data = [
    {
        title: 'Ant Design Title 1',
    },
    {
        title: 'Ant Design Title 2',
    },
    {
        title: 'Ant Design Title 3',
    },
    {
        title: 'Ant Design Title 4',
    },
];

const BtnNotification = () => {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    return (
        <Popover
            title="Notifications"
            trigger="click"
            placement="bottomRight"
            content={
                <List
                    itemLayout="horizontal"
                    dataSource={data}
                    style={{
                        width: '400px',
                    }}
                    renderItem={(item, index) => (
                        <List.Item
                            onMouseEnter={() => setHoveredIndex(index)}
                            onMouseLeave={() => setHoveredIndex(null)}
                            style={{
                                backgroundColor: hoveredIndex === index ? 'lightgray' : 'white'
                            }}
                        >
                            <List.Item.Meta
                                avatar={<Avatar src={`https://api.dicebear.com/7.x/miniavs/svg?seed=${index}`} />}
                                title={item.title}
                                description="Ant Design, a design language for background"
                            />
                        </List.Item>
                    )}
                />
            }
        >
            <Badge size="small" offset={[-11, 10]} count={5}>
                <Button
                    type="text"
                >
                    <AlertOutlined
                        style={{
                            fontSize: '14px', color: 'white'
                        }}
                    />
                </Button>
            </Badge>
        </Popover>
    )
}

export default BtnNotification