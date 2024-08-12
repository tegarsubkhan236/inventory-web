import {CSSProperties, ReactNode} from "react";
import {Breadcrumb, Button, Flex, Row, Space, theme, Typography} from "antd";
import {ArrowLeftOutlined} from '@ant-design/icons';

const {Text, Title} = Typography;

type PageHeaderProps = {
    title: string;
    subTitle?: string;
    backUrl?: string;
    extra?: ReactNode;
    content?: ReactNode;
    sticky?: boolean;
    style?: CSSProperties;
};

const Index = (props: PageHeaderProps) => {
    const {
        token: {colorBgContainer},
    } = theme.useToken();

    const headerStyle: CSSProperties = {
        background: colorBgContainer,
        padding: '16px 24px',
        ...props.style,
    };

    if (props.sticky) {
        headerStyle.position = 'sticky';
        headerStyle.top = 48;
        headerStyle.zIndex = 1;
    }

    return (
        <div style={headerStyle}>
            <Row style={{marginBottom: '8px'}}>
                <Flex>
                    <Breadcrumb
                        items={[{
                            title: 'Home',
                        }, {
                            title: <a href="">Application Center</a>,
                        }, {
                            title: 'An Application',
                        },]}
                    />
                </Flex>
            </Row>

            <Row style={{marginBottom: '8px'}}>
                <Flex justify="space-between" align="center" style={{width: '100%'}}>
                    <Space size="small">
                        {props.backUrl && (<Button type="text" icon={<ArrowLeftOutlined/>}/>)}
                        <Title level={5} style={{margin: '0'}}>{props.title}</Title>
                        {props.subTitle && <Text type="secondary">{props.subTitle}</Text>}
                    </Space>
                    {props.extra}
                </Flex>
            </Row>

            {props.content && <Row style={{marginBottom: '8px'}}>{props.content}</Row>}
        </div>
    );
};

export default Index;