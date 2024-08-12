import {Form, Input, Row, Col, Button, Typography, Radio, Select, Card, Flex, FormProps} from 'antd';
import {UpOutlined, DownOutlined} from '@ant-design/icons';
import {useState} from "react";

const {Option} = Select;

interface FormItem {
    label: string;
    name: string;
    type: string;
    options?: {
        label: string;
        value: string | number
    }[];
    hidden?: boolean;
}

interface ExpandableFormProps {
    formItems: FormItem[];
    onFinish: (values: FormProps['onFinish']) => void;
}

const Index = ({formItems, onFinish}: ExpandableFormProps) => {
    const [expanded, setExpanded] = useState(false);
    const [form] = Form.useForm();

    const handleExpand = () => {
        setExpanded(!expanded);
    };

    const insertedFormItems = [...formItems.slice(0, 2), {
        label: 'Actions',
        name: 'actions',
        type: 'actions',
        hidden: formItems.length < 3 || !expanded,
    }, ...formItems.slice(2)];

    return (
        <Card style={{ height: expanded ? 'auto' : 80, marginBottom: 15 }}>
            <Form form={form} onFinish={onFinish} autoComplete="off">
                <Row gutter={40} justify={"space-between"}>
                    {insertedFormItems.map((item, index) => (
                        <Col span={8} key={index}>
                                {item.type === 'input' && (
                                    <Form.Item label={item.label} name={item.name} hidden={item.hidden && !expanded}>
                                        <Input />
                                    </Form.Item>
                                )}
                                {item.type === 'radio' && (
                                    <Form.Item label={item.label} name={item.name} hidden={item.hidden && !expanded}>
                                        <Radio.Group options={item.options} />
                                    </Form.Item>
                                )}
                                {item.type === 'select' && (
                                    <Form.Item label={item.label} name={item.name} hidden={item.hidden && !expanded}>
                                        <Select>
                                            {item.options?.map((opt, idx) => (
                                                <Option key={idx} value={opt.value}>
                                                    {opt.label}
                                                </Option>
                                            ))}
                                        </Select>
                                    </Form.Item>
                                )}
                                {item.type === 'actions' && (
                                    <Flex gap={10} justify="flex-end" align="center">
                                        <Button htmlType="reset">Reset</Button>
                                        <Button type="primary" htmlType="submit">
                                            Query
                                        </Button>
                                        <Typography.Link onClick={handleExpand}>
                                            Expand {expanded ? <UpOutlined style={{fontSize: 14}}/> :
                                            <DownOutlined style={{fontSize: 14}}/>}
                                        </Typography.Link>
                                    </Flex>
                                )}
                        </Col>
                    ))}
                </Row>
            </Form>
        </Card>
    );
};

export default Index;