import {Button, Card, Form, FormProps, Input, InputNumber, Radio, Typography} from "antd";
import PageHeader from "../../components/PageHeader";
import PageContent from "../../components/PageContent";

const BasicForm = () => {
    const [form] = Form.useForm();

    type FieldType = {
        title: string;
        goal_description: string;
        metrics: string;
        client: string;
        inviting_critics: string;
        weight: number;
        target_disclosure: string;
    };

    const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
        console.log('Success:', values);
    };

    return (
        <>
            <PageHeader
                title="Basic Form"
                content={
                    <Typography.Text>
                        Form pages are used to collect or verify information to users,
                        and basic forms are common in scenarios where there are fewer data items.
                    </Typography.Text>
                }
            />
            <PageContent>
                <Card>
                    <Form
                        form={form}
                        labelCol={{span: 8}}
                        wrapperCol={{span: 10}}
                        onFinish={onFinish}
                        autoComplete={"off"}
                        requiredMark={"optional"}
                    >
                        <Form.Item<FieldType>
                            label="Title"
                            name="title"
                            required
                        >
                            <Input
                                placeholder="Give the target name"
                            />
                        </Form.Item>

                        <Form.Item<FieldType>
                            label="Goal Description"
                            name="goal_description"
                            required
                        >
                            <Input.TextArea rows={3} placeholder="Please enter your work goals"/>
                        </Form.Item>

                        <Form.Item<FieldType>
                            label="Metrics"
                            name="metrics"
                            required
                        >
                            <Input.TextArea rows={3} placeholder="Please enter metrics"/>
                        </Form.Item>

                        <Form.Item<FieldType>
                            label="Client"
                            name="client"
                            tooltip="this is client tooltip"
                        >
                            <Input placeholder="Please describe your customer service, internal customers directly"/>
                        </Form.Item>

                        <Form.Item<FieldType>
                            label="Inviting Critics"
                            name="inviting_critics"
                        >
                            <Input placeholder="Please direct @ Name / job number, you can invite up to 5 people"/>
                        </Form.Item>

                        <Form.Item<FieldType>
                            label="Weight"
                            name="weight"
                        >
                            <InputNumber<number>
                                defaultValue={0}
                                min={0}
                                max={100}
                                formatter={(value) => `${value}%`}
                                parser={(value) => value?.replace('%', '') as unknown as number}
                            />
                        </Form.Item>

                        <Form.Item<FieldType>
                            label="Target Disclosure"
                            name="target_disclosure"
                            required
                            initialValue={1}
                        >
                            <Radio.Group>
                                <Radio value={1}>Public</Radio>
                                <Radio value={2}>Partially public</Radio>
                                <Radio value={3}>Private</Radio>
                            </Radio.Group>
                        </Form.Item>

                        <Form.Item wrapperCol={{offset: 8, span: 16}}>
                            <Button type="primary" htmlType="submit">
                                Submit
                            </Button>
                        </Form.Item>
                    </Form>
                </Card>
            </PageContent>
        </>
    );
};

export default BasicForm;